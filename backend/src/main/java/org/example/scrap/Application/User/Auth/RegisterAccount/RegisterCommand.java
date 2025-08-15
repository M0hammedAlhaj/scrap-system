package org.example.scrap.Application.User.Auth.RegisterAccount;

import org.example.scrap.Core.User.UserType;

public record RegisterCommand(String name,
                              String email,
                              String password,
                              String phoneNumber,
                              String city,
                              String state,
                              UserType type) {
}
