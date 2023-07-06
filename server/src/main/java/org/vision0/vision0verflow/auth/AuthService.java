package org.vision0.vision0verflow.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

@Service
public class AuthService {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(UserService userService,
                       PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    public void authenticate(String email, String password) {
        User foundUser = userService.find(email);

        String registeredPassword = foundUser.getPassword();
        if (!passwordEncoder.matches(password, registeredPassword))
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
    }
}
