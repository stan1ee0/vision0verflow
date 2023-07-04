package org.vision0.vision0verflow.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.vision0.vision0verflow.question.dto.QuestionPatch;
import org.vision0.vision0verflow.question.dto.QuestionPost;
import org.vision0.vision0verflow.question.dto.QuestionResponse;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class QuestionController {
    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/questions")
    public QuestionResponse postQuestion(@RequestBody QuestionPost questionPost) {
        Question createdQuestion = questionService.create(new Question(questionPost));

        return new QuestionResponse(createdQuestion);
    }

    @GetMapping("/questions")
    public List<QuestionResponse> getQuestions() {
        List<Question> allQuestions = questionService.findAll();

        return allQuestions.stream()
                .map(question -> new QuestionResponse(question))
                .collect(Collectors.toList());
    }

    @GetMapping("/questions/{question-id}")
    public QuestionResponse getQuestion(@PathVariable("question-id") long questionId) {
        Question foundQuestion = questionService.find(questionId);

        return new QuestionResponse(foundQuestion);
    }

    @PatchMapping("questions/{question-id}")
    public QuestionResponse patchQuestion(@PathVariable("question-id") long questionId,
                                          @RequestBody QuestionPatch questionPatch) {
        Question editedQuestion = questionService.edit(questionId, new Question(questionPatch));

        return new QuestionResponse(editedQuestion);
    }

    @DeleteMapping("questions/{question-id}")
    public QuestionResponse deleteQuestion(@PathVariable("question-id") long questionId) {
        Question deletedQuestion = questionService.delete(questionId);

        return new QuestionResponse(deletedQuestion);
    }

    @PostConstruct
    void setInitialQuestions() {
        questionService.create(new Question("About Vision0", "What is the meaning of Vision0?"));
        questionService.create(new Question("About Vision 0verflow" ,"What is the meaning of Vision 0verflow?"));
    }
}
