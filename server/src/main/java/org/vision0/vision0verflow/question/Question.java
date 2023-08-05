package org.vision0.vision0verflow.question;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.comment.Comment;
import org.vision0.vision0verflow.misc.View;
import org.vision0.vision0verflow.misc.Vote;
import org.vision0.vision0verflow.question.dto.QuestionPatch;
import org.vision0.vision0verflow.question.dto.QuestionPost;
import org.vision0.vision0verflow.tag.Tag;
import org.vision0.vision0verflow.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
    @ManyToOne
    private User user;
    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();
    @OneToMany(mappedBy = "question")
    private List<Comment> comments = new ArrayList<>();
    @OneToMany(mappedBy = "question")
    private List<View> views = new ArrayList<>();
    @OneToMany(mappedBy = "question")
    private List<Vote> votes = new ArrayList<>();
    @ManyToMany
    private List<Tag> tags = new ArrayList<>();
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    @Column(nullable = false)
    private boolean isDeleted;

    public Question(QuestionPost questionPost) {
        this.title = questionPost.getTitle();
        this.content = questionPost.getContent();
    }

    public Question(QuestionPatch questionPatch) {
        this.title = questionPatch.getTitle();
        this.content = questionPatch.getContent();
    }

    public Question(String title, String content, User user) {
        this.title = title;
        this.content = content;
        this.user = user;
    }
}
