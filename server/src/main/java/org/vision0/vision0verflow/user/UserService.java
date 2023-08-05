package org.vision0.vision0verflow.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(User user) {
        if (isRegistered(user.getEmail()))
            throw new ResponseStatusException(HttpStatus.CONFLICT);

        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        user.setRegisteredAt(LocalDateTime.now());

        User registeredUser = userRepository.save(user);

        return registeredUser;
    }

    public List<User> findAll() {
        List<User> allUsers = userRepository.findAll();

        return allUsers;
    }

    public User find(long userId) {
        User foundUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return foundUser;
    }

    public User find(String email) {
        User foundUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return foundUser;
    }

    public User update(long userId, User user) {
        User foundUser = find(userId);
        if (user.getName() == null && user.getPassword() == null)
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        if (user.getName() != null)
            foundUser.setName(user.getName());

        if (user.getPassword() != null) {
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            foundUser.setPassword(encodedPassword);
        }

        User updatedUser = userRepository.save(foundUser);

        return updatedUser;
    }

    public User terminate(long userId) {
        User foundUser = find(userId);
        if (foundUser.isTerminated())
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        foundUser.setTerminatedAt(LocalDateTime.now());
        foundUser.setTerminated(true);

        User terminatedUser = userRepository.save(foundUser);

        return terminatedUser;
    }

    boolean isRegistered(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        return optionalUser.isPresent();
    }
}
