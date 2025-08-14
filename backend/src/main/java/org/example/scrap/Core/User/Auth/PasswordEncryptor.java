package org.example.scrap.Core.User.Auth;

public interface PasswordEncryptor {
    String hash(String rawPassword);

    boolean matches(String rawPassword, String hashedPassword);
}
