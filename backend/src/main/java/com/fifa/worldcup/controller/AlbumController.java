package com.fifa.worldcup.controller;

import com.fifa.worldcup.dto.StickerDTO;
import com.fifa.worldcup.dto.UserCollectionDTO;
import com.fifa.worldcup.service.AlbumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/album")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AlbumController {
    private final AlbumService albumService;

    @GetMapping("/stickers")
    public ResponseEntity<List<StickerDTO>> getAllStickers() {
        return ResponseEntity.ok(albumService.getAllStickers());
    }

    @GetMapping("/collection/{userId}")
    public ResponseEntity<List<UserCollectionDTO>> getUserCollection(@PathVariable Long userId) {
        return ResponseEntity.ok(albumService.getUserCollection(userId));
    }
}
