package org.example.scrap.Application.User.Auth;

import org.example.scrap.Core.User.UserType;

public record RegisterCommand(String email,
                              String password,
                              String phoneNumber,
                              UserType type) {
}
