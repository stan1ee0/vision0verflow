package org.vision0.vision0verflow.misc;

import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.answer.AnswerService;
import org.vision0.vision0verflow.misc.dto.VotePost;
import org.vision0.vision0verflow.misc.dto.VoteResponse;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.question.QuestionService;
import org.vision0.vision0verflow.security.JwtTokenizer;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

@CrossOrigin
@RestController
public class MiscController {
    private final UserService userService;
    private final JwtTokenizer jwtTokenizer;
    private final MiscService miscService;
    private final QuestionService questionService;
    private final AnswerService answerService;

    public MiscController(UserService userService,
                          JwtTokenizer jwtTokenizer,
                          MiscService miscService,
                          QuestionService questionService,
                          AnswerService answerService) {
        this.userService = userService;
        this.jwtTokenizer = jwtTokenizer;
        this.miscService = miscService;
        this.questionService = questionService;
        this.answerService = answerService;
    }

    @PostMapping("/{source}/{id}/votes")
    public VoteResponse PostVote(@PathVariable String source,
                                 @PathVariable long id,
                                 @RequestBody VotePost votePost,
                                 @RequestHeader(value = "Authorization", required = false) String token) {
        if (token != null && token.startsWith("Bearer ")) {
            Vote vote = new Vote(votePost);

            try {
                String email = jwtTokenizer.getVerifiedSubject(token.substring(7));
                User user = userService.find(email);
                vote.setUser(user);
            }
            catch (JWTVerificationException e) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
            }

            if (source.equals("questions")) {
                Question question = questionService.find(id);
                vote.setQuestion(question);
            }
            else if (source.equals("answers")) {
                Answer answer = answerService.find(id);
                vote.setAnswer(answer);
            }
            else throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

            Vote castedVote = miscService.castVote(vote);
            return new VoteResponse(castedVote);
        }

        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{source}/{id}/votes")
    public VoteResponse getVotes(@PathVariable String source,
                                 @PathVariable long id,
                                 @RequestHeader(value = "Authorization", required = false) String token) {
        if (token != null && token.startsWith("Bearer ")) {
            Vote vote = new Vote();

            try {
                String email = jwtTokenizer.getVerifiedSubject(token.substring(7));
                User user = userService.find(email);
                vote.setUser(user);
            }
            catch (JWTVerificationException e) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
            }

            if (source.equals("questions")) {
                Question foundQuestion = questionService.find(id);
                vote = miscService.findVote(foundQuestion, vote.getUser());
            }
            else if (source.equals("answers")) {
                Answer foundAnswer = answerService.find(id);
                vote = miscService.findVote(foundAnswer, vote.getUser());
            }
            else throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

            return new VoteResponse(vote);
        }

        throw new ResponseStatusException(HttpStatus.NO_CONTENT);
    }
}
