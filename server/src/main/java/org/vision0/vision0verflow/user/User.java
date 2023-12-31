package org.vision0.vision0verflow.user;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.user.dto.UserPatch;
import org.vision0.vision0verflow.user.dto.UserPost;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@Entity
@Table(name="app_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String name;
    private String password;
    @Column(nullable = false)
    private LocalDateTime registeredAt;
    private LocalDateTime terminatedAt;
    @Column(nullable = false)
    private boolean isTerminated;

    public User(UserPost userPost) {
        this.email = userPost.getEmail();
        this.name = userPost.getName();
        this.password = userPost.getPassword();
    }

    public User(UserPatch userPatch) {
        this.name = userPatch.getName();
        this.password = userPatch.getPassword();
    }

    public User(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
}
