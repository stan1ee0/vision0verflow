package org.vision0.vision0verflow.auth;

import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.vision0.vision0verflow.auth.dto.AuthRequest;
import org.vision0.vision0verflow.auth.dto.AuthResponse;
import org.vision0.vision0verflow.security.JwtTokenizer;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;
import org.vision0.vision0verflow.user.dto.UserResponse;

@CrossOrigin
@RestController
public class AuthController {
    private final AuthService authService;
    private final JwtTokenizer jwtTokenizer;
    private final UserService userService;

    @Autowired
    public AuthController(AuthService authService,
                          JwtTokenizer jwtTokenizer,
                          UserService userService) {
        this.authService = authService;
        this.jwtTokenizer = jwtTokenizer;
        this.userService = userService;
    }

    @PostMapping("/auth")
    public AuthResponse postAuth(@RequestBody AuthRequest authRequest) {
        String email = authRequest.getEmail();
        String password = authRequest.getPassword();
        User authUser = authService.authenticate(email, password);

        String token = jwtTokenizer.generate(email);
        String aiToken = jwtTokenizer.generate("aision@verflow.org");

        return new AuthResponse(token, aiToken, authUser);
    }

    @GetMapping("/auth")
    public UserResponse getAuth(@RequestHeader(value = "Authorization", required = false) String token) {
        if (token != null && token.startsWith("Bearer ")) {
            try {
                String email = jwtTokenizer.getVerifiedSubject(token.substring(7));
                User foundUser = userService.find(email);
                return new UserResponse(foundUser);
            } catch (JWTVerificationException e) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
            }
        }
        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }
}
