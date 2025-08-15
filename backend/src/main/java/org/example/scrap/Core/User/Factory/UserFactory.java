package org.example.scrap.Core.User.Factory;

import org.example.scrap.Core.User.User;

public interface UserFactory {
    User createUser(String email, String password, String phoneNumber);
}
