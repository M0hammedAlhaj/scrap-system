package org.example.scrap.infrastructure.Jpa;

import lombok.AllArgsConstructor;
import org.example.scrap.Core.User.User;
import org.example.scrap.Core.User.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@AllArgsConstructor
public class JpaUserRepository implements UserRepository {
    private final JpaUserMongodb repository;

    @Override
    public Optional<User> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public User save(User entity) {
        return repository.save(entity);
    }
}
