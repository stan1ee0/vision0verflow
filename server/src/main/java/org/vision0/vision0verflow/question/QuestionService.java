package org.vision0.vision0verflow.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question create(Question question) {
        question.setCreatedAt(LocalDateTime.now());
        question.setModifiedAt(question.getCreatedAt());
        Question createdQuestion = questionRepository.save(question);

        return createdQuestion;
    }

    public List<Question> findAll() {
        List<Question> allQuestions = questionRepository.findAll();

        return allQuestions;
    }
}
