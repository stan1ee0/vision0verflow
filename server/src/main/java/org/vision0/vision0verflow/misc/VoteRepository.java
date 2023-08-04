package org.vision0.vision0verflow.misc;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findByQuestionAndUser(Question question, User user);
    Optional<Vote> findByAnswerAndUser(Answer answer, User user);
}
