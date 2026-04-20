package com.fifa.worldcup.dto;

import lombok.Data;

@Data
public class UserCollectionDTO {
    private Long userId;
    private Long stickerId;
    private Integer quantity;
    private StickerDTO sticker;
}
