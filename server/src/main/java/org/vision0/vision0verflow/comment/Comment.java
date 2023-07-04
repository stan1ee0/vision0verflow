package org.vision0.vision0verflow.comment;

import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.asm.Advice;
import org.vision0.vision0verflow.comment.dto.CommentPatch;
import org.vision0.vision0verflow.comment.dto.CommentPost;

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

    public Comment(String content) {
        this.content = content;
    }
}
