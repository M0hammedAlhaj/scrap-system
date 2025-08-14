package org.example.scrap.infrastructure.Jpa;

import org.example.scrap.Core.User.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaUserMongodb extends MongoRepository<User,String> {
}
