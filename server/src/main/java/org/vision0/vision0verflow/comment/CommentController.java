package org.vision0.vision0verflow.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.vision0.vision0verflow.comment.dto.CommentPatch;
import org.vision0.vision0verflow.comment.dto.CommentPost;
import org.vision0.vision0verflow.comment.dto.CommentResponse;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/comments")
    public CommentResponse postComment(@RequestBody CommentPost commentPost) {
        Comment createdComment = commentService.create(new Comment(commentPost));

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

    @PostConstruct
    public void setInitialComments() {
        commentService.create(new Comment("How awesome Vision0 is!"));
        commentService.create(new Comment("How more awesome Vision 0verflow is!!"));
    }
}
