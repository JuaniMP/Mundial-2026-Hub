package com.fifa.worldcup.service;

import com.fifa.worldcup.dto.MatchDTO;
import com.fifa.worldcup.entity.Match;
import com.fifa.worldcup.repository.MatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MatchService {
    private final MatchRepository matchRepository;

    public List<MatchDTO> getAllMatches() {
        return matchRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<MatchDTO> getMatchesByMatchday(Integer matchday) {
        return matchRepository.findByMatchday(matchday).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private MatchDTO convertToDTO(Match match) {
        MatchDTO dto = new MatchDTO();
        dto.setId(match.getId());
        dto.setStadiumId(match.getStadium() != null ? match.getStadium().getId() : null);
        dto.setTeam1(match.getTeam1());
        dto.setTeam2(match.getTeam2());
        dto.setMatchDate(match.getMatchDate());
        dto.setMatchday(match.getMatchday());
        dto.setGroupName(match.getGroupName());
        return dto;
    }
}
