package com.fifa.worldcup.service;

import com.fifa.worldcup.dto.StadiumDTO;
import com.fifa.worldcup.entity.Stadium;
import com.fifa.worldcup.repository.StadiumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StadiumService {
    private final StadiumRepository stadiumRepository;

    public List<StadiumDTO> getAllStadiums() {
        return stadiumRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public StadiumDTO getStadiumById(Long id) {
        Stadium stadium = stadiumRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Stadium not found"));
        return convertToDTO(stadium);
    }

    private StadiumDTO convertToDTO(Stadium stadium) {
        StadiumDTO dto = new StadiumDTO();
        dto.setId(stadium.getId());
        dto.setName(stadium.getName());
        dto.setCity(stadium.getCity());
        dto.setCountry(stadium.getCountry());
        dto.setCapacity(stadium.getCapacity());
        dto.setDescription(stadium.getDescription());
        dto.setImageUrl(stadium.getImageUrl());
        return dto;
    }
}
