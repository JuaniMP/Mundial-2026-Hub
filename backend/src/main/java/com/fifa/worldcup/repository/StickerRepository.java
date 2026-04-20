package com.fifa.worldcup.repository;

import com.fifa.worldcup.entity.Sticker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StickerRepository extends JpaRepository<Sticker, Long> {
}
