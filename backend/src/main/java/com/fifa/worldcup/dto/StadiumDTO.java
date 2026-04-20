package com.fifa.worldcup.dto;

import lombok.Data;

@Data
public class StadiumDTO {
    private Long id;
    private String name;
    private String city;
    private String country;
    private Integer capacity;
    private String description;
    private String imageUrl;
}
