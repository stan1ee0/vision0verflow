package org.vision0.vision0verflow.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.vision0.vision0verflow.auth.dto.AuthRequest;
import org.vision0.vision0verflow.auth.dto.AuthResponse;
import org.vision0.vision0verflow.security.JwtTokenizer;

@CrossOrigin
@RestController
public class AuthController {
    private final AuthService authService;
    private final JwtTokenizer jwtTokenizer;

    @Autowired
    public AuthController(AuthService authService, JwtTokenizer jwtTokenizer) {
        this.authService = authService;
        this.jwtTokenizer = jwtTokenizer;
    }

    @PostMapping("/auth")
    public AuthResponse postAuth(@RequestBody AuthRequest authRequest) {
        String email = authRequest.getEmail();
        String password = authRequest.getPassword();
        authService.authenticate(email, password);

        String generatedToken = jwtTokenizer.generate(email);

        return new AuthResponse(generatedToken);
    }
}