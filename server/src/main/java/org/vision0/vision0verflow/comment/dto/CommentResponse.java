package org.vision0.vision0verflow.comment.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.comment.Comment;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class CommentResponse {
    private long id;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    private boolean isDeleted;

    public CommentResponse(Comment comment) {
        this.id = comment.getId();
        this.content = comment.getContent();
        this.createdAt = comment.getCreatedAt();
        this.editedAt = comment.getEditedAt();
        this.deletedAt = comment.getDeletedAt();
        this.isDeleted = comment.isDeleted();
    }
}
