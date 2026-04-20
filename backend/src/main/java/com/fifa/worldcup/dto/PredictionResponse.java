package com.fifa.worldcup.dto;

import com.fifa.worldcup.entity.Prediction;
import lombok.Data;

@Data
public class PredictionResponse {
    private Long id;
    private Long userId;
    private Long matchId;
    private Integer team1Score;
    private Integer team2Score;
    private Prediction.PredictionStatus status;
    private Integer pointsEarned;
}
