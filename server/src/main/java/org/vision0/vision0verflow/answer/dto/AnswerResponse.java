package org.vision0.vision0verflow.answer.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.misc.Vote;
import org.vision0.vision0verflow.user.dto.UserResponse;

import java.time.LocalDateTime;
import java.util.Optional;

@NoArgsConstructor
@Data
public class AnswerResponse {
    private long id;
    private String content;
    private UserResponse user;
    private long questionId;
    private int scoreOfVotes;
    private int voteValue;
    private LocalDateTime createdAt;
    private LocalDateTime editedAt;
    private LocalDateTime deletedAt;
    private boolean isDeleted;

    public AnswerResponse(Answer answer) {
        this.id = answer.getId();
        this.content = answer.getContent();
        if (answer.getUser() != null)
            this.user = new UserResponse(answer.getUser());
        if (answer.getQuestion() != null)
            this.questionId = answer.getQuestion().getId();
        this.scoreOfVotes = answer.getVotes().stream()
                .mapToInt(vote -> vote.getValue())
                .sum();
        Optional<Vote> optionalVote = answer.getVotes().stream()
                .filter(vote -> vote.getUser().equals(answer.getUser()))
                .findFirst();
        if (optionalVote.isPresent())
            this.voteValue = optionalVote.get().getValue();
        this.createdAt = answer.getCreatedAt();
        this.editedAt = answer.getEditedAt();
        this.deletedAt = answer.getDeletedAt();
        this.isDeleted = answer.isDeleted();
    }
}
