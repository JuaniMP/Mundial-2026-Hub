package com.fifa.worldcup.service;

import com.fifa.worldcup.dto.StickerDTO;
import com.fifa.worldcup.dto.UserCollectionDTO;
import com.fifa.worldcup.entity.Sticker;
import com.fifa.worldcup.entity.User;
import com.fifa.worldcup.entity.UserCollection;
import com.fifa.worldcup.repository.StickerRepository;
import com.fifa.worldcup.repository.UserCollectionRepository;
import com.fifa.worldcup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AlbumService {
    private final StickerRepository stickerRepository;
    private final UserCollectionRepository userCollectionRepository;
    private final UserRepository userRepository;

    public List<StickerDTO> getAllStickers() {
        return stickerRepository.findAll().stream()
                .map(this::convertToStickerDTO)
                .collect(Collectors.toList());
    }

    public List<UserCollectionDTO> getUserCollection(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return userCollectionRepository.findByUser(user).stream()
                .map(this::convertToCollectionDTO)
                .collect(Collectors.toList());
    }

    private StickerDTO convertToStickerDTO(Sticker sticker) {
        StickerDTO dto = new StickerDTO();
        dto.setId(sticker.getId());
        dto.setName(sticker.getName());
        dto.setCategory(sticker.getCategory());
        dto.setRarity(sticker.getRarity());
        dto.setImageUrl(sticker.getImageUrl());
        dto.setDescription(sticker.getDescription());
        return dto;
    }

    private UserCollectionDTO convertToCollectionDTO(UserCollection collection) {
        UserCollectionDTO dto = new UserCollectionDTO();
        dto.setUserId(collection.getUser().getId());
        dto.setStickerId(collection.getSticker().getId());
        dto.setQuantity(collection.getQuantity());
        dto.setSticker(convertToStickerDTO(collection.getSticker()));
        return dto;
    }
}
