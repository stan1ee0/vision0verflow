package org.vision0.vision0verflow.tag;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TagService {
    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag create(Tag tag) {
        if (isPresent(tag.getName()))
            throw new ResponseStatusException(HttpStatus.CONFLICT);

        tag.setCreatedAt(LocalDateTime.now());

        Tag createdTag = tagRepository.save(tag);

        return createdTag;
    }

    public List<Tag> findAll() {
        List<Tag> allTags = tagRepository.findAll();

        return allTags;
    }

    boolean isPresent(String name) {
        Optional<Tag> optionalTag = tagRepository.findByName(name);

        return optionalTag.isPresent();
    }
}
