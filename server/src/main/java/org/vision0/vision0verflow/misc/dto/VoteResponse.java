package org.vision0.vision0verflow.misc.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.vision0.vision0verflow.misc.Vote;

@NoArgsConstructor
@Data
public class VoteResponse {
    private long id;
    private int value;

    public VoteResponse(Vote vote) {
        this.id = vote.getId();
        this.value = vote.getValue();
    }
}
