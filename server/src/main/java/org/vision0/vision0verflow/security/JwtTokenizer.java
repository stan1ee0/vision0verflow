package org.vision0.vision0verflow.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;

@Component
public class JwtTokenizer {
    @Value("${jwt.key.secret}")
    private String secretKey;
    @Value("${jwt.expiration-time}")
    private long expirationTime;
    private Algorithm algorithm;
    private JWTVerifier jwtVerifier;

    @PostConstruct
    public void init() {
        algorithm = Algorithm.HMAC256(secretKey);
        jwtVerifier = JWT.require(algorithm).build();
    }

    public String generate(String subject) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + expirationTime);

        String token = JWT.create()
                .withSubject(subject)
                .withIssuedAt(now)
                .withExpiresAt(expirationDate)
                .sign(algorithm);

        return token;
    }

    public String getVerifiedSubject(String token) throws JWTVerificationException {
        DecodedJWT decodedJWT = jwtVerifier.verify(token);

        String subject = decodedJWT.getSubject();

        return subject;
    }
}
