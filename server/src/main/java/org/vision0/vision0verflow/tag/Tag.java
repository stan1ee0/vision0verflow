package org.vision0.vision0verflow.tag;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.question.Question;
import org.vision0.vision0verflow.tag.dto.TagPost;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;
    @ManyToMany(mappedBy = "tags")
    private List<Question> questions;
    @Column(nullable = false)
    private LocalDateTime createdAt;

    public Tag(TagPost tagPost) {
        this.name = tagPost.getName();
        this.description = tagPost.getDescription();
    }
}
