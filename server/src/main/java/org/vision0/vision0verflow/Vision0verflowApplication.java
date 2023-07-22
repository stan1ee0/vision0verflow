package org.vision0.vision0verflow;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.vision0.vision0verflow.answer.Answer;
import org.vision0.vision0verflow.answer.AnswerService;
import org.vision0.vision0verflow.comment.Comment;
import org.vision0.vision0verflow.comment.CommentService;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.question.QuestionService;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class Vision0verflowApplication {
	private final UserService userService;
	private final QuestionService questionService;
	private final AnswerService answerService;
	private final CommentService commentService;

	@Value("${vision.initialization.enabled:false}")
	private boolean enabled;

	@Autowired
	public Vision0verflowApplication(UserService userService,
									 QuestionService questionService,
									 AnswerService answerService,
									 CommentService commentService) {
		this.userService = userService;
		this.questionService = questionService;
		this.answerService = answerService;
		this.commentService = commentService;
	}

	public static void main(String[] args) {
		SpringApplication.run(Vision0verflowApplication.class, args);
	}

	@PostConstruct
	public void setInitialEntities() {
		if (enabled) {
			User user = userService.register(new User("vision@verflow.org",
					"Vision0", "Vision0verflow"));
			userService.register(new User("aision@verflow.org",
					"Aision0", "Aision0verflow"));

			Question question = questionService.create(new Question(
					"About Vision0", "What is the meaning of Vision0?", user));
			Answer answer = answerService.create(new Answer(
					"What is the meaning of Vision 0verflow?", user, question));

			commentService.create(new Comment("Vision0 means a pure vision.", user, question));
			commentService.create(new Comment("Vision 0verflow means that a vision is overflowing," +
					" but it's not a problem because it is pure.", user, answer));
		}
	}
}
