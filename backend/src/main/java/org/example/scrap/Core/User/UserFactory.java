package org.example.scrap.Core.User;

public interface UserFactory {
    User createUser(String email, String password, String phoneNumber);
}
