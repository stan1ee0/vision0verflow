package org.vision0.vision0verflow.answer;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.dto.AnswerPatch;
import org.vision0.vision0verflow.answer.dto.AnswerPost;
import org.vision0.vision0verflow.comment.Comment;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
    @ManyToOne
    private User user;
    @ManyToOne
    private Question question;
    @OneToMany(mappedBy = "answer")
    private List<Comment> comments = new ArrayList<>();
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    @Column(nullable = false)
    private boolean deleted;

    public Answer(AnswerPost answerPost) {
        this.content = answerPost.getContent();
    }

    public Answer(AnswerPatch answerPatch) {
        this.content = answerPatch.getContent();
    }

    public Answer(String content, User user, Question question) {
        this.content = content;
        this.user = user;
        this.question = question;
    }
}
