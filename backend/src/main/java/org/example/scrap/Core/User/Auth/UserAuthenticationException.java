package org.example.scrap.Core.User.Auth;

public class UserAuthenticationException extends RuntimeException {
    public UserAuthenticationException(String message) {
        super(message);
    }

    public UserAuthenticationException() {
        super("Invalid Credentials");
    }
}
