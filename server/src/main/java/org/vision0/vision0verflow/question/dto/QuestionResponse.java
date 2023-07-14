package org.vision0.vision0verflow.question.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.dto.UserResponse;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class QuestionResponse {
    private long id;
    private String title;
    private String content;
    private UserResponse user;
    private LocalDateTime createdAt;
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    private boolean isDeleted;

    public QuestionResponse(Question question) {
        this.id = question.getId();
        this.title = question.getTitle();
        this.content = question.getContent();
        if (question.getUser() != null)
            this.user = new UserResponse(question.getUser());
        this.createdAt = question.getCreatedAt();
        this.editedAt = question.getEditedAt();
        this.deletedAt = question.getDeletedAt();
        this.isDeleted = question.isDeleted();
    }
}
