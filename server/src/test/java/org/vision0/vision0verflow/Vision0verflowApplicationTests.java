package org.vision0.vision0verflow;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.vision0.vision0verflow.security.JwtTokenizer;

@SpringBootTest
class Vision0verflowApplicationTests {
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JwtTokenizer jwtTokenizer;

	@Test
	void passwordEncodingTest() {
		String password = "Test0verflow";
		String encodedPassword = passwordEncoder.encode(password);

		Assertions.assertTrue(passwordEncoder.matches(password, encodedPassword));
	}

	@Test
	void jwtTokenTest() {
		String email = "test@verflow.org";
		String token = jwtTokenizer.generate(email);
		String subject = jwtTokenizer.getVerifiedSubject(token);

		Assertions.assertEquals(email, subject);
	}
}
