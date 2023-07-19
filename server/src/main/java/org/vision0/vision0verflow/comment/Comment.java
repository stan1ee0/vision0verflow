package org.vision0.vision0verflow.comment;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.comment.dto.CommentPatch;
import org.vision0.vision0verflow.comment.dto.CommentPost;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String content;
    @ManyToOne
    private User user;
    @ManyToOne
    private Question question;
    @ManyToOne
    private Answer answer;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    @Column(nullable = false)
    private boolean isDeleted;

    public Comment(CommentPost commentPost) {
        this.content = commentPost.getContent();
    }

    public Comment(CommentPatch commentPatch) {
        this.content = commentPatch.getContent();
    }

    public Comment(String content, User user, Question question) {
        this.content = content;
        this.user = user;
        this.question = question;
    }

    public Comment(String content, User user, Answer answer) {
        this.content = content;
        this.user = user;
        this.answer = answer;
    }
}
