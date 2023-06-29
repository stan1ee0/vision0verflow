package org.vision0.vision0verflow.user;

import org.vision0.vision0verflow.user.dto.UserPatch;
import org.vision0.vision0verflow.user.dto.UserPost;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@Entity
@Table(name="app_user")
public class User {
    @Id
    @GeneratedValue
    private long id;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private LocalDateTime registeredAt;
    private LocalDateTime terminatedAt;
    @Column(nullable = false)
    private boolean terminated;

    public User(UserPost userPost) {
        this.email = userPost.getEmail();
        this.name = userPost.getName();
    }

    public User(UserPatch userPatch) {
        this.name = userPatch.getName();
    }

    public User(String email, String name) {
        this.email = email;
        this.name = name;
    }
}
