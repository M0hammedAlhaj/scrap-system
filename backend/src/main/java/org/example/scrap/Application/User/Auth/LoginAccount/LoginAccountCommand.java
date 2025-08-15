package org.example.scrap.Application.User.Auth.LoginAccount;

import lombok.Builder;

@Builder
public record LoginAccountCommand(String email, String password) {
}
