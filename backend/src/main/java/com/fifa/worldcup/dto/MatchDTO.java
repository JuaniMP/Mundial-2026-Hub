package com.fifa.worldcup.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class MatchDTO {
    private Long id;
    private Long stadiumId;
    private String team1;
    private String team2;
    private LocalDateTime matchDate;
    private Integer matchday;
    private String groupName;
}
