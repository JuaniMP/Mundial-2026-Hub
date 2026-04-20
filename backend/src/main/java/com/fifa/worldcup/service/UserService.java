package com.fifa.worldcup.service;

import com.fifa.worldcup.dto.UserDTO;
import com.fifa.worldcup.entity.User;
import com.fifa.worldcup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<UserDTO> getGlobalLeaderboard() {
        return userRepository.findAllByOrderByPointsDesc().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return convertToDTO(user);
    }

    private UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setProfileImage(user.getProfileImage());
        dto.setGlobalRank(user.getGlobalRank());
        dto.setPoints(user.getPoints());
        dto.setFavoriteTeam(user.getFavoriteTeam());
        return dto;
    }
}
