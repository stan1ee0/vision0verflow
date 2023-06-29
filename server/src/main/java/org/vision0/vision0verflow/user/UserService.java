package org.vision0.vision0verflow.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(User user) {
        String email = user.getEmail();
        if (isRegistered(email))
            throw new ResponseStatusException(HttpStatus.CONFLICT);

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

    public User update(long userId, User user) {
        User foundUser = find(userId);

        if (user.getName() != null)
            foundUser.setName(user.getName());

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

    public boolean isRegistered(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        return optionalUser.isPresent();
    }
}
