package org.vision0.vision0verflow.misc;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@Entity
public class View {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Question question;
    @ManyToOne
    private User user;
    @Column(nullable = false)
    private LocalDateTime viewedAt;

    public View(Question question, User user) {
        this.question = question;
        this.user = user;
    }
}
