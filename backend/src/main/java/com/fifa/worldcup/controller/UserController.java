package com.fifa.worldcup.controller;

import com.fifa.worldcup.dto.UserDTO;
import com.fifa.worldcup.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;

    @GetMapping("/leaderboard")
    public ResponseEntity<List<UserDTO>> getGlobalLeaderboard() {
        return ResponseEntity.ok(userService.getGlobalLeaderboard());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
}
