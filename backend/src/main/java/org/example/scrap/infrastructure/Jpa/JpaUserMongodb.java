package org.example.scrap.infrastructure.Jpa;

import org.example.scrap.Core.User.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface JpaUserMongodb extends MongoRepository<User,UUID> {
}
