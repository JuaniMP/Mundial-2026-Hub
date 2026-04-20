package com.fifa.worldcup.controller;

import com.fifa.worldcup.dto.PredictionRequest;
import com.fifa.worldcup.dto.PredictionResponse;
import com.fifa.worldcup.service.PredictionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/predictions")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PredictionController {
    private final PredictionService predictionService;

    @PostMapping
    public ResponseEntity<PredictionResponse> submitPrediction(@Valid @RequestBody PredictionRequest request) {
        return ResponseEntity.ok(predictionService.submitPrediction(request));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PredictionResponse>> getUserPredictions(@PathVariable Long userId) {
        return ResponseEntity.ok(predictionService.getUserPredictions(userId));
    }
}
