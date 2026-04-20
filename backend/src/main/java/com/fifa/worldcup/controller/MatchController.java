package com.fifa.worldcup.controller;

import com.fifa.worldcup.dto.MatchDTO;
import com.fifa.worldcup.service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/matches")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MatchController {
    private final MatchService matchService;

    @GetMapping
    public ResponseEntity<List<MatchDTO>> getAllMatches() {
        return ResponseEntity.ok(matchService.getAllMatches());
    }

    @GetMapping("/matchday/{day}")
    public ResponseEntity<List<MatchDTO>> getMatchesByMatchday(@PathVariable Integer day) {
        return ResponseEntity.ok(matchService.getMatchesByMatchday(day));
    }
}
