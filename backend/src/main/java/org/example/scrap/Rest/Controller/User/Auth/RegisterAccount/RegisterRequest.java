package org.example.scrap.Rest.Controller.User.Auth.RegisterAccount;

import jakarta.validation.constraints.Email;
import org.example.scrap.Core.User.UserType;

public record RegisterRequest(@Email String email,
                              String password,
                              String phoneNumber,
                              UserType userType) {
}
