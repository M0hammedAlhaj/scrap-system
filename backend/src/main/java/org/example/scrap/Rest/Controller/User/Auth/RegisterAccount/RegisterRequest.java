package org.example.scrap.Rest.Controller.User.Auth.RegisterAccount;

import jakarta.validation.constraints.Email;
import org.example.scrap.Core.User.UserType;

public record RegisterRequest(String name,
                              @Email String email,
                              String password,
                              String phoneNumber,
                              String city,
                              String state,
                              UserType userType) {
}
