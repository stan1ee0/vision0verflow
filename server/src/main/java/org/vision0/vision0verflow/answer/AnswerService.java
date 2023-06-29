package org.vision0.vision0verflow.answer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        answer.setModifiedAt(answer.getCreatedAt());
        Answer createdAnswer = answerRepository.save(answer);

        return createdAnswer;
    }

    public List<Answer> findAll() {
        List<Answer> allAnswers = answerRepository.findAll();

        return allAnswers;
    }
}
