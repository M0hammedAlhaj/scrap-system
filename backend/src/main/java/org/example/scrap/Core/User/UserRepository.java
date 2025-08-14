package org.example.scrap.Core.User;

import org.example.scrap.Core.shared.BaseRepository;

import java.util.Optional;

public interface UserRepository extends BaseRepository<User> {
    Optional<User> findById(String id);
}
