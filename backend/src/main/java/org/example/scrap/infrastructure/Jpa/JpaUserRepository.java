package org.example.scrap.infrastructure.Jpa;

import lombok.AllArgsConstructor;
import org.example.scrap.Core.User.User;
import org.example.scrap.Core.User.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

import static org.springframework.data.mongodb.core.aggregation.MergeOperation.UniqueMergeId.id;

@Repository
@AllArgsConstructor
public class JpaUserRepository implements UserRepository {
    private final JpaUserMongodb repository;

    @Override
    public Optional<User> findById(UUID id) {
        return repository.findById(id);
    }

    @Override
    public User save(User entity) {
        return repository.save(entity);
    }
}
