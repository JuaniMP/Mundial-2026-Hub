package com.fifa.worldcup.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "predictions")
@Data
public class Prediction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "match_id")
    private Match match;

    private Integer team1Score;
    private Integer team2Score;

    @Enumerated(EnumType.STRING)
    private PredictionStatus status = PredictionStatus.PENDING;

    private Integer pointsEarned = 0;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public enum PredictionStatus {
        PENDING, CORRECT, INCORRECT
    }
}
