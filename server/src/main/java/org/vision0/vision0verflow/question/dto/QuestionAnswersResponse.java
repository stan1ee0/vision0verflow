package org.vision0.vision0verflow.question.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.answer.dto.AnswerResponse;
import org.vision0.vision0verflow.question.Question;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
public class QuestionAnswersResponse extends QuestionResponse {
    private List<AnswerResponse> answers;

    public QuestionAnswersResponse(Question question) {
        super(question);

        this.answers = question.getAnswers().stream()
                .map(answer -> new AnswerResponse(answer))
                .collect(Collectors.toList());
    }
}
