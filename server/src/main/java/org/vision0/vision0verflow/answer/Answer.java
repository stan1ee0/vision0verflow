package org.vision0.vision0verflow.answer;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.dto.AnswerPost;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime modifiedAt;
    private LocalDateTime deletedAt;
    @Column(nullable = false)
    private boolean deleted;

    public Answer(AnswerPost answerPost) {
        this.content = answerPost.getContent();
        this.createdAt = LocalDateTime.now();
        this.modifiedAt = this.createdAt;
    }
}
