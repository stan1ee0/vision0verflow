package org.vision0.vision0verflow.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment create(Comment comment) {
        comment.setCreatedAt(LocalDateTime.now());
        comment.setEditedAt(comment.getCreatedAt());

        Comment createdComment = commentRepository.save(comment);

        return createdComment;
    }

    public List<Comment> findAll() {
        List<Comment> allComments = commentRepository.findAll();

        return allComments;
    }

    public Comment find(long commentId) {
        Comment foundComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return foundComment;
    }

    public Comment edit(long commentId, Comment comment) {
        Comment foundComment = find(commentId);
        if (comment.getContent() == null)
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        foundComment.setContent(comment.getContent());
        foundComment.setEditedAt(LocalDateTime.now());

        Comment editedComment = commentRepository.save(foundComment);

        return editedComment;
    }

    public Comment delete(long commentId) {
        Comment foundComment = find(commentId);
        if (foundComment.isDeleted())
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);

        foundComment.setDeletedAt(LocalDateTime.now());
        foundComment.setDeleted(true);

        Comment deletedComment = commentRepository.save(foundComment);

        return deletedComment;
    }
}
