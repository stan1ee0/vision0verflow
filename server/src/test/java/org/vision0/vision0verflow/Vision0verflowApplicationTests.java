package org.vision0.vision0verflow;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

@SpringBootTest
class Vision0verflowApplicationTests {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private UserService userService;

	@Test
	void passwordEncodingTest() {
		String password = "Test0verflow";

		User registeredUser = userService.register(new User("test@verflow.org",
				"Test0", password));
		String registeredPassword = registeredUser.getPassword();

		Assertions.assertTrue(passwordEncoder.matches(password, registeredPassword));
	}
}
