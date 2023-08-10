package org.vision0.vision0verflow.misc;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MiscService {
    private final ViewRepository viewRepository;
    private final VoteRepository voteRepository;

    public MiscService(ViewRepository viewRepository,
                       VoteRepository voteRepository) {
        this.viewRepository = viewRepository;
        this.voteRepository = voteRepository;
    }

    public void addView(Question question, User user) {
        Optional<View> optionalView = viewRepository.findByQuestionAndUser(question, user);
        if (optionalView.isPresent()) return;

        View view = new View(question, user);
        view.setViewedAt(LocalDateTime.now());

        viewRepository.save(view);
    }

    public Vote castVote(Vote vote) {
        User user = vote.getUser();
        Question question = vote.getQuestion();
        Answer answer = vote.getAnswer();

        if (question != null) {
            Optional<Vote> optionalVote = voteRepository.findByQuestionAndUser(question, user);
            if (optionalVote.isPresent()) {
                optionalVote.get().setValue(vote.getValue());
                vote = optionalVote.get();
            }
        }

        if (answer != null) {
            Optional<Vote> optionalVote = voteRepository.findByAnswerAndUser(answer, user);
            if (optionalVote.isPresent()) {
                optionalVote.get().setValue(vote.getValue());
                vote = optionalVote.get();
            }
        }

        vote.setVotedAt(LocalDateTime.now());

        Vote castedVote = voteRepository.save(vote);

        return castedVote;
    }

    public Vote findVote(Question question, User user) {
        Vote foundVote = voteRepository.findByQuestionAndUser(question, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return foundVote;
    }

    public Vote findVote(Answer answer, User user) {
        Vote foundVote = voteRepository.findByAnswerAndUser(answer, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return foundVote;
    }
}
