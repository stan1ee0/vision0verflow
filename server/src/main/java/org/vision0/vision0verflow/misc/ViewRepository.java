package org.vision0.vision0verflow.misc;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import java.util.Optional;

public interface ViewRepository extends JpaRepository<View, Long> {
    Optional<View> findByQuestionAndUser(Question question, User user);
}
