package com.fifa.worldcup.controller;

import com.fifa.worldcup.dto.StadiumDTO;
import com.fifa.worldcup.service.StadiumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/stadiums")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class StadiumController {
    private final StadiumService stadiumService;

    @GetMapping
    public ResponseEntity<List<StadiumDTO>> getAllStadiums() {
        return ResponseEntity.ok(stadiumService.getAllStadiums());
    }

    @GetMapping("/{id}")
    public ResponseEntity<StadiumDTO> getStadiumById(@PathVariable Long id) {
        return ResponseEntity.ok(stadiumService.getStadiumById(id));
    }
}
