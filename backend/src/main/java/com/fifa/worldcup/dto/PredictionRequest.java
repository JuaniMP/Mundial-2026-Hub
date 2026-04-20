package com.fifa.worldcup.dto;

import lombok.Data;

@Data
public class PredictionRequest {
    private Long userId;
    private Long matchId;
    private Integer team1Score;
    private Integer team2Score;
}
