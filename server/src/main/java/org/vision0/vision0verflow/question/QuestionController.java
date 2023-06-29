package org.vision0.vision0verflow.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.vision0.vision0verflow.question.dto.QuestionPost;
import org.vision0.vision0verflow.question.dto.QuestionResponse;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class QuestionController {
    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping("/questions")
    public QuestionResponse postQuestion(@RequestBody QuestionPost questionPost) {
        Question question = new Question(questionPost);
        Question createdQuestion = questionService.create(question);

        return new QuestionResponse(createdQuestion);
    }

    @GetMapping("/questions")
    public List<QuestionResponse> getQuestions() {
        List<Question> allQuestions = questionService.findAll();

        return allQuestions.stream()
                .map(question -> new QuestionResponse(question))
                .collect(Collectors.toList());
    }
}
