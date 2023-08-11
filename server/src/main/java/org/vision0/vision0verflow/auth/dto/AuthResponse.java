package org.vision0.vision0verflow.auth.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.user.User;

@NoArgsConstructor
@Data
public class AuthResponse {
    private String token;
    private String aiToken;
    private User user;

    public AuthResponse(String token, String aiToken, User user) {
        this.token = token;
        this.aiToken = aiToken;
        this.user = user;
    }
}
