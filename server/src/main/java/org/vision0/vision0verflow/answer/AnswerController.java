package org.vision0.vision0verflow.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.vision0.vision0verflow.answer.dto.AnswerPost;
import org.vision0.vision0verflow.answer.dto.AnswerResponse;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class AnswerController {
    private final AnswerService answerService;

    @Autowired
    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @PostMapping("/answers")
    public AnswerResponse postAnswer(@RequestBody AnswerPost answerPost) {
        Answer answer = new Answer(answerPost);
        Answer createdAnswer = answerService.create(answer);

        return new AnswerResponse(createdAnswer);
    }

    @GetMapping("/answers")
    public List<AnswerResponse> getAnswers() {
        List<Answer> allAnswers = answerService.findAll();

        return allAnswers.stream()
                .map(answer -> new AnswerResponse(answer))
                .collect(Collectors.toList());
    }
}
