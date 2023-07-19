package org.vision0.vision0verflow.answer.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.comment.dto.CommentResponse;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
public class AnswerDetailResponse extends AnswerResponse {
    private List<CommentResponse> comments;

    public AnswerDetailResponse(Answer answer) {
        super(answer);

        this.comments = answer.getComments().stream()
                .map(comment -> new CommentResponse(comment))
                .collect(Collectors.toList());
    }
}
