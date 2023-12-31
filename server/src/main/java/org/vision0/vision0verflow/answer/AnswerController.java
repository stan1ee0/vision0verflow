package org.vision0.vision0verflow.answer;

import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.vision0.vision0verflow.answer.dto.AnswerDetailResponse;
import org.vision0.vision0verflow.answer.dto.AnswerPatch;
import org.vision0.vision0verflow.answer.dto.AnswerPost;
import org.vision0.vision0verflow.answer.dto.AnswerResponse;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.question.QuestionService;
import org.vision0.vision0verflow.security.JwtTokenizer;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class AnswerController {
    private final AnswerService answerService;
    private final UserService userService;
    private final JwtTokenizer jwtTokenizer;
    private final QuestionService questionService;

    @Autowired
    public AnswerController(AnswerService answerService,
                            UserService userService,
                            JwtTokenizer jwtTokenizer,
                            QuestionService questionService) {
        this.answerService = answerService;
        this.userService = userService;
        this.jwtTokenizer = jwtTokenizer;
        this.questionService = questionService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/questions/{question-id}/answers")
    public AnswerResponse postAnswer(@PathVariable("question-id") long questionId,
                                     @RequestBody AnswerPost answerPost,
                                     @RequestHeader (value = "Authorization", required = false) String token) {
        Answer answer = new Answer(answerPost);

        Question foundQuestion = questionService.find(questionId);
        answer.setQuestion(foundQuestion);

        if (token != null && token.startsWith("Bearer ")) {
            try {
                String email = jwtTokenizer.getVerifiedSubject(token.substring(7));
                User user = userService.find(email);
                answer.setUser(user);
            } catch (JWTVerificationException e) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
            }
        }

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

    @GetMapping("/answers/{answer-id}")
    public AnswerDetailResponse getAnswer(@PathVariable("answer-id") long answerId) {
        Answer foundAnswer = answerService.find(answerId);

        return new AnswerDetailResponse(foundAnswer);
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
}
