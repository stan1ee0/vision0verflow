package org.vision0.vision0verflow.question;

import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.vision0.vision0verflow.question.dto.QuestionAnswersResponse;
import org.vision0.vision0verflow.question.dto.QuestionPatch;
import org.vision0.vision0verflow.question.dto.QuestionPost;
import org.vision0.vision0verflow.question.dto.QuestionResponse;
import org.vision0.vision0verflow.security.JwtTokenizer;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class QuestionController {
    private final QuestionService questionService;
    private final UserService userService;
    private final JwtTokenizer jwtTokenizer;

    @Autowired
    public QuestionController(QuestionService questionService,
                              UserService userService,
                              JwtTokenizer jwtTokenizer) {
        this.questionService = questionService;
        this.userService = userService;
        this.jwtTokenizer = jwtTokenizer;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/questions")
    public QuestionResponse postQuestion(@RequestBody QuestionPost questionPost,
                                         @RequestHeader(value = "Authorization", required = false) String token) {
        Question question = new Question(questionPost);

        if (token != null && token.startsWith("Bearer ")) {
            try {
                String email = jwtTokenizer.getVerifiedSubject(token.substring(7));
                User user = userService.find(email);
                question.setUser(user);
            } catch (JWTVerificationException e) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
            }
        }

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

    @GetMapping("/questions/{question-id}")
    public QuestionAnswersResponse getQuestion(@PathVariable("question-id") long questionId) {
        Question foundQuestion = questionService.find(questionId);

        return new QuestionAnswersResponse(foundQuestion);
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
