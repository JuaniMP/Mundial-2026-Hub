package com.fifa.worldcup.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_collections")
@Data
public class UserCollection {
    @EmbeddedId
    private UserCollectionId id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("stickerId")
    @JoinColumn(name = "sticker_id")
    private Sticker sticker;

    private Integer quantity = 1;

    private LocalDateTime obtainedAt = LocalDateTime.now();

    @Embeddable
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserCollectionId implements Serializable {
        private Long userId;
        private Long stickerId;
    }
}
