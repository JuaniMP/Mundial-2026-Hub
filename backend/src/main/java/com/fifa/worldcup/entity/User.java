package com.fifa.worldcup.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    private String profileImage;

    private Integer globalRank = 0;

    private Integer points = 0;

    private String favoriteTeam;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
