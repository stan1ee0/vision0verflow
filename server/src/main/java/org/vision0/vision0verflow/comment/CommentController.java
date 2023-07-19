package org.vision0.vision0verflow.comment;

import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.vision0.vision0verflow.comment.dto.CommentPatch;
import org.vision0.vision0verflow.comment.dto.CommentPost;
import org.vision0.vision0verflow.comment.dto.CommentResponse;
import org.vision0.vision0verflow.security.JwtTokenizer;
import org.vision0.vision0verflow.user.User;
import org.vision0.vision0verflow.user.UserService;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class CommentController {
    private final CommentService commentService;
    private final UserService userService;
    private final JwtTokenizer jwtTokenizer;

    @Autowired
    public CommentController(CommentService commentService,
                             UserService userService,
                             JwtTokenizer jwtTokenizer) {
        this.commentService = commentService;
        this.userService = userService;
        this.jwtTokenizer = jwtTokenizer;
    }

    @PostMapping("/comments")
    public CommentResponse postComment(@RequestBody CommentPost commentPost,
                                       @RequestHeader(value = "Authorization", required = false) String token) {
        Comment comment = new Comment(commentPost);

        if (token != null && token.startsWith("Bearer ")) {
            try {
                String email = jwtTokenizer.getVerifiedSubject(token.substring(7));
                User user = userService.find(email);
                comment.setUser(user);
            } catch (JWTVerificationException e) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
            }
        }

        Comment createdComment = commentService.create(comment);

        return new CommentResponse(createdComment);
    }

    @GetMapping("/comments")
    public List<CommentResponse> getComments() {
        List<Comment> allComments = commentService.findAll();

        return allComments.stream()
                .map(comment -> new CommentResponse(comment))
                .collect(Collectors.toList());
    }

    @GetMapping("/comments/{comment-id}")
    public CommentResponse getComment(@PathVariable("comment-id") long commentId) {
        Comment foundComment = commentService.find(commentId);

        return new CommentResponse(foundComment);
    }

    @PatchMapping("/comments/{comment-id}")
    public CommentResponse patchComment(@PathVariable("comment-id") long commentId,
                                        @RequestBody CommentPatch commentPatch) {
        Comment editedComment = commentService.edit(commentId, new Comment(commentPatch));

        return new CommentResponse(editedComment);
    }

    @DeleteMapping("/comments/{comment-id}")
    public CommentResponse deleteComment(@PathVariable("comment-id") long commentId) {
        Comment deletedComment = commentService.delete(commentId);

        return new CommentResponse(deletedComment);
    }
}
