package org.vision0.vision0verflow.answer.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.Answer;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class AnswerResponse {
    private long id;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    private boolean isDeleted;

    public AnswerResponse(Answer answer) {
        this.id = answer.getId();
        this.content = answer.getContent();
        this.createdAt = answer.getCreatedAt();
        this.editedAt = answer.getEditedAt();
        this.deletedAt = answer.getDeletedAt();
        this.isDeleted = answer.isDeleted();
    }
}
