package org.example.scrap.infrastructure.Jpa;

import org.example.scrap.Core.User.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface JpaUserMongodb extends MongoRepository<User,String> {
    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
}
