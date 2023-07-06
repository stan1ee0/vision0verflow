package org.vision0.vision0verflow.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.vision0.vision0verflow.answer.dto.AnswerPatch;
import org.vision0.vision0verflow.answer.dto.AnswerPost;
import org.vision0.vision0verflow.answer.dto.AnswerResponse;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
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

    @GetMapping("/answers/{answer-id}")
    public AnswerResponse getAnswer(@PathVariable("answer-id") long answerId) {
        Answer foundAnswer = answerService.find(answerId);

        return new AnswerResponse(foundAnswer);
    }

    @PatchMapping("answers/{answer-id}")
    public AnswerResponse patchAnswer(@PathVariable("answer-id") long answerId,
                                          @RequestBody AnswerPatch answerPatch) {
        Answer editedAnswer = answerService.edit(answerId, new Answer(answerPatch));

        return new AnswerResponse(editedAnswer);
    }

    @DeleteMapping("answers/{answer-id}")
    public AnswerResponse deleteAnswer(@PathVariable("answer-id") long answerId) {
        Answer deletedAnswer = answerService.delete(answerId);

        return new AnswerResponse(deletedAnswer);
    }

    @PostConstruct
    void setInitialAnswers() {
        answerService.create(new Answer("Vision0 means a pure vision."));
        answerService.create(new Answer("Vision 0verflow means that a vision is overflowing," +
                " but it's not a problem because it is pure."));
    }
}
