package org.vision0.vision0verflow.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.vision0.vision0verflow.answer.dto.AnswerPost;
import org.vision0.vision0verflow.answer.dto.AnswerResponse;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class AnswerController {
    private final AnswerService answerService;

    @Autowired
    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/answers")
    public AnswerResponse postAnswer(@RequestBody AnswerPost answerPost) {
        Answer createdAnswer = answerService.create(new Answer(answerPost));

        return new AnswerResponse(createdAnswer);
    }

    @GetMapping("/answers")
    public List<AnswerResponse> getAnswers() {
        List<Answer> allAnswers = answerService.findAll();

        return allAnswers.stream()
                .map(answer -> new AnswerResponse(answer))
                .collect(Collectors.toList());
    }

    @PostConstruct
    void setInitialAnswers() {
        answerService.create(new Answer("Vision0 means a pure vision."));
        answerService.create(new Answer("Vision 0verflow means that a vision is overflowing," +
                " but it's not a problem because it is pure."));
    }
}
