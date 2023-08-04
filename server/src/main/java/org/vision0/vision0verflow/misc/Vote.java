package org.vision0.vision0verflow.misc;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.misc.dto.VotePost;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@Entity
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private int value;
    @ManyToOne
    private Question question;
    @ManyToOne
    private Answer answer;
    @ManyToOne
    private User user;
    @Column(nullable = false)
    private LocalDateTime votedAt;

    public Vote(Question question, User user) {
        this.question = question;
        this.user = user;
    }

    public Vote(Answer answer, User user) {
        this.answer = answer;
        this.user = user;
    }

    public Vote(VotePost votePost) {
        this.value = votePost.getValue();
    }
}
