package org.vision0.vision0verflow.question.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.question.Question;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class QuestionResponse {
    private long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private LocalDateTime deleteAt;
    private boolean isDeleted;

    public QuestionResponse(Question question) {
        this.id = question.getId();
        this.title = question.getTitle();
        this.content = question.getContent();
        this.createdAt = question.getCreatedAt();
        this.modifiedAt = question.getModifiedAt();
        this.deleteAt = question.getDeletedAt();
        this.isDeleted = question.isDeleted();
    }
}
