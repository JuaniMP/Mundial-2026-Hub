package com.fifa.worldcup.repository;

import com.fifa.worldcup.entity.UserCollection;
import com.fifa.worldcup.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserCollectionRepository extends JpaRepository<UserCollection, UserCollection.UserCollectionId> {
    List<UserCollection> findByUser(User user);
}
