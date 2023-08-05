package org.vision0.vision0verflow.tag.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.tag.Tag;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class TagResponse {
    private long id;
    private String name;
    private String description;
    private LocalDateTime createdAt;

    public TagResponse(Tag tag) {
        this.id = tag.getId();
        this.name = tag.getName();
        this.description = tag.getDescription();
        this.createdAt = tag.getCreatedAt();
    }
}
