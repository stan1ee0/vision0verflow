package org.vision0.vision0verflow.user.dto;

import org.vision0.vision0verflow.user.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class UserResponse {
    private long id;
    private String email;
    private String name;
    private LocalDateTime registeredAt;
    private LocalDateTime terminatedAt;
    private boolean terminated;

    public UserResponse(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.registeredAt = user.getRegisteredAt();
        this.terminatedAt = user.getTerminatedAt();
        this.terminated = user.isTerminated();
    }
}
