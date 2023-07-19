package org.vision0.vision0verflow.auth.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class AuthResponse {
    private String token;
    private String aiToken;

    public AuthResponse(String token, String aiToken) {
        this.token = token;
        this.aiToken = aiToken;
    }
}
