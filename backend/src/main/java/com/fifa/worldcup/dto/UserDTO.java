package com.fifa.worldcup.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String profileImage;
    private Integer globalRank;
    private Integer points;
    private String favoriteTeam;
}
