package org.example.scrap.Rest.Controller.User.Auth.LoginAccount;

import lombok.Builder;
import org.example.scrap.Rest.Resources.User.UserResources;

@Builder
public record LoginAccountResponse(UserResources user, String token) {
}
