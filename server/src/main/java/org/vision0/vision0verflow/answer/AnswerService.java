package org.vision0.vision0verflow.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    @Autowired
    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer create(Answer answer) {
        answer.setCreatedAt(LocalDateTime.now());
        answer.setEditedAt(answer.getCreatedAt());

        Answer createdAnswer = answerRepository.save(answer);

        return createdAnswer;
    }

    public List<Answer> findAll() {
        List<Answer> allAnswers = answerRepository.findAll();

        return allAnswers;
    }

    public Answer find(long answerId) {
        Answer foundAnswer = answerRepository.findById(answerId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return foundAnswer;
    }

    public Answer edit(long answerId, Answer answer) {
        Answer foundAnswer = find(answerId);
        if (answer.getContent() == null)
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        foundAnswer.setContent(answer.getContent());
        foundAnswer.setEditedAt(LocalDateTime.now());

        Answer editedAnswer = answerRepository.save(foundAnswer);

        return editedAnswer;
    }

    public Answer delete(long answerId) {
        Answer foundAnswer = find(answerId);
        if (foundAnswer.isDeleted())
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        foundAnswer.setDeletedAt(LocalDateTime.now());
        foundAnswer.setDeleted(true);

        Answer deletedAnswer = answerRepository.save(foundAnswer);

        return deletedAnswer;
    }
}
