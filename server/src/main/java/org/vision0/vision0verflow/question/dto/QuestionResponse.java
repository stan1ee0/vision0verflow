package org.vision0.vision0verflow.question.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.tag.dto.TagResponse;
import org.vision0.vision0verflow.user.dto.UserResponse;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Data
public class QuestionResponse {
    private long id;
    private String title;
    private String content;
    private UserResponse user;
    private int numOfAnswers;
    private int numOfViews;
    private int scoreOfVotes;
    private List<TagResponse> tags;
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
        this.numOfAnswers = question.getAnswers().size();
        this.numOfViews = question.getViews().size();
        this.scoreOfVotes = question.getVotes().stream()
                .mapToInt(vote -> vote.getValue())
                .sum();
        this.tags = question.getTags().stream()
                .map(tag -> new TagResponse(tag))
                .collect(Collectors.toList());
        this.createdAt = question.getCreatedAt();
        this.editedAt = question.getEditedAt();
        this.deletedAt = question.getDeletedAt();
        this.isDeleted = question.isDeleted();
    }
}
