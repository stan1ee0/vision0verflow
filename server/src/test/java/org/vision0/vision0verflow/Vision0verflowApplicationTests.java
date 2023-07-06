package org.vision0.vision0verflow;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.vision0.vision0verflow.security.JwtTokenizer;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

@SpringBootTest
class Vision0verflowApplicationTests {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private UserService userService;
	@Autowired
	private JwtTokenizer jwtTokenizer;

	@Test
	void passwordEncodingTest() {
		String password = "Test0verflow";

		User user = userService.register(new User("test@verflow.org",
				"Test0", password));
		String savedPassword = user.getPassword();

		Assertions.assertTrue(passwordEncoder.matches(password, savedPassword));
	}

	@Test
	void jwtTokenTest() {
		String email = "Test@verflow.org";
		String token = jwtTokenizer.generate(email);
		String subject = jwtTokenizer.getVerifiedSubject(token);

		Assertions.assertEquals(email, subject);
	}
}
