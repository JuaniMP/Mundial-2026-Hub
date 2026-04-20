package com.fifa.worldcup.repository;

import com.fifa.worldcup.entity.Prediction;
import com.fifa.worldcup.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PredictionRepository extends JpaRepository<Prediction, Long> {
    List<Prediction> findByUser(User user);
}
