package org.vision0.vision0verflow.misc;

import org.springframework.stereotype.Service;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.user.User;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class MiscService {
    private final ViewRepository viewRepository;

    public MiscService(ViewRepository viewRepository) {
        this.viewRepository = viewRepository;
    }

    public void addView(Question question, User user) {
        Optional<View> optionalView = viewRepository.findByQuestionAndUser(question, user);
        if (optionalView.isPresent()) return;

        View view = new View(question, user);
        view.setViewedAt(LocalDateTime.now());

        viewRepository.save(view);
    }
}
