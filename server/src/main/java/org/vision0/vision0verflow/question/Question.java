package org.vision0.vision0verflow.question;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.question.dto.QuestionPatch;
import org.vision0.vision0verflow.question.dto.QuestionPost;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    @Column(nullable = false)
    private boolean deleted;

    public Question(QuestionPost questionPost) {
        this.title = questionPost.getTitle();
        this.content = questionPost.getContent();
    }

    public Question(QuestionPatch questionPatch) {
        this.title = questionPatch.getTitle();
        this.content = questionPatch.getContent();
    }

    public Question(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
