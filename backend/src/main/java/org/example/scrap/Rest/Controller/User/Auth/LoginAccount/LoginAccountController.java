package org.example.scrap.Rest.Controller.User.Auth.LoginAccount;

import lombok.AllArgsConstructor;
import org.example.scrap.Application.User.Auth.LoginAccount.LoginAccountCommand;
import org.example.scrap.Application.User.Auth.LoginAccount.LoginAccountUseCase;
import org.example.scrap.Core.User.Auth.UserAuthenticationException;
import org.example.scrap.Core.User.User;
import org.example.scrap.Rest.Resources.User.UserResources;
import org.example.scrap.Rest.Shared.StandardErrorResponse;
import org.example.scrap.Rest.Shared.StandardSuccessResponse;
import org.example.scrap.infrastructure.Jwt.JwtGeneration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@AllArgsConstructor
public class LoginAccountController {
    private final LoginAccountUseCase useCase;
    private final JwtGeneration jwtGeneration;

    @PostMapping("/api/v1/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginAccountRequest loginAccountRequest) {
        LoginAccountCommand command = LoginAccountCommand
                .builder()
                .email(loginAccountRequest.email())
                .password(loginAccountRequest.password())
                .build();
        try {
            User user = useCase.execute(command);
            String token = jwtGeneration.generateToken(user.getId(), user.getEmail());
            LoginAccountResponse response = LoginAccountResponse.builder()
                    .user(new UserResources(user))
                    .token(token)
                    .build();
            return ResponseEntity.ok(StandardSuccessResponse.builder()
                    .data(response)
                    .status(HttpStatus.OK.value())
                    .message("Login successful"));

        } catch (UserAuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(StandardErrorResponse.builder()
                            .timestamp(Instant.now())
                            .status(HttpStatus.UNAUTHORIZED.value())
                            .code("AUTHENTICATION_ERROR")
                            .message(e.getMessage())
                            .build());
        }
    }
}
