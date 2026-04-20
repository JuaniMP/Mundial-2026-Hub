package com.fifa.worldcup.service;

import com.fifa.worldcup.dto.PredictionRequest;
import com.fifa.worldcup.dto.PredictionResponse;
import com.fifa.worldcup.entity.Match;
import com.fifa.worldcup.entity.Prediction;
import com.fifa.worldcup.entity.User;
import com.fifa.worldcup.repository.MatchRepository;
import com.fifa.worldcup.repository.PredictionRepository;
import com.fifa.worldcup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PredictionService {
    private final PredictionRepository predictionRepository;
    private final UserRepository userRepository;
    private final MatchRepository matchRepository;

    public PredictionResponse submitPrediction(PredictionRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Match match = matchRepository.findById(request.getMatchId())
                .orElseThrow(() -> new RuntimeException("Match not found"));

        Prediction prediction = new Prediction();
        prediction.setUser(user);
        prediction.setMatch(match);
        prediction.setTeam1Score(request.getTeam1Score());
        prediction.setTeam2Score(request.getTeam2Score());
        prediction.setStatus(Prediction.PredictionStatus.PENDING);

        Prediction saved = predictionRepository.save(prediction);
        return convertToResponse(saved);
    }

    public List<PredictionResponse> getUserPredictions(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return predictionRepository.findByUser(user).stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    private PredictionResponse convertToResponse(Prediction prediction) {
        PredictionResponse response = new PredictionResponse();
        response.setId(prediction.getId());
        response.setUserId(prediction.getUser().getId());
        response.setMatchId(prediction.getMatch().getId());
        response.setTeam1Score(prediction.getTeam1Score());
        response.setTeam2Score(prediction.getTeam2Score());
        response.setStatus(prediction.getStatus());
        response.setPointsEarned(prediction.getPointsEarned());
        return response;
    }
}
