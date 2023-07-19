package org.vision0.vision0verflow.question.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.dto.AnswerDetailResponse;
import org.vision0.vision0verflow.answer.dto.AnswerResponse;
import org.vision0.vision0verflow.comment.dto.CommentResponse;
import org.vision0.vision0verflow.question.Question;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
public class QuestionDetailResponse extends QuestionResponse {
    private List<AnswerResponse> answers;
    private List<CommentResponse> comments;

    public QuestionDetailResponse(Question question) {
        super(question);

        this.answers = question.getAnswers().stream()
                .map(answer -> new AnswerDetailResponse(answer))
                .collect(Collectors.toList());

        this.comments = question.getComments().stream()
                .map(comment -> new CommentResponse(comment))
                .collect(Collectors.toList());
    }
}
