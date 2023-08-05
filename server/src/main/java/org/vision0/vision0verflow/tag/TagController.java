package org.vision0.vision0verflow.tag;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.vision0.vision0verflow.tag.dto.TagPost;
import org.vision0.vision0verflow.tag.dto.TagResponse;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class TagController {
    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/tags")
    public TagResponse postTag(@RequestBody TagPost tagPost) {
        Tag createdPost = tagService.create(new Tag(tagPost));

        return new TagResponse(createdPost);
    }

    @GetMapping("/tags")
    public List<TagResponse> getTags() {
        List<Tag> allTags = tagService.findAll();

        return allTags.stream()
                .map(tag -> new TagResponse(tag))
                .collect(Collectors.toList());
    }
}
