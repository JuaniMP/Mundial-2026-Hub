package com.fifa.worldcup.dto;

import com.fifa.worldcup.entity.Sticker;
import lombok.Data;

@Data
public class StickerDTO {
    private Long id;
    private String name;
    private String category;
    private Sticker.Rarity rarity;
    private String imageUrl;
    private String description;
}
