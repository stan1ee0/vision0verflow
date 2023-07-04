package org.vision0.vision0verflow.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
        question.setEditedAt(question.getCreatedAt());
        Question createdQuestion = questionRepository.save(question);

        return createdQuestion;
    }

    public List<Question> findAll() {
        List<Question> allQuestions = questionRepository.findAll();

        return allQuestions;
    }

    public Question find(long questionId) {
        Question foundQuestion = questionRepository.findById(questionId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return foundQuestion;
    }

    public Question edit(long questionId, Question question) {
        Question foundQuestion = find(questionId);
        if (question.getTitle() == null && question.getContent() == null)
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        if (question.getTitle() != null)
            foundQuestion.setTitle(question.getTitle());
        if (question.getContent() != null)
            foundQuestion.setContent(question.getContent());
        foundQuestion.setEditedAt(LocalDateTime.now());

        Question editedQuestion = questionRepository.save(foundQuestion);

        return editedQuestion;
    }

    public Question delete(long questionId) {
        Question foundQuestion = find(questionId);
        if (foundQuestion.isDeleted())
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        foundQuestion.setDeletedAt(LocalDateTime.now());
        foundQuestion.setDeleted(true);

        Question deletedQuestion = questionRepository.save(foundQuestion);

        return deletedQuestion;
    }
}
