package org.example.scrap.Rest.Controller.User.Auth.RegisterAccount;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.example.scrap.Application.User.Auth.RegisterCommand;
import org.example.scrap.Application.User.Auth.RegisterUseCase;
import org.example.scrap.Core.User.User;
import org.example.scrap.Rest.Resources.User.UserResources;
import org.example.scrap.Rest.Shared.StandardErrorResponse;
import org.example.scrap.Rest.Shared.StandardSuccessResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
@Tag(name = "Authentication")
public class RegisterController {
    private final RegisterUseCase registerUseCase;

    @Operation(summary = "Register a new user account", description = "Creates a new user account with name, email, and password")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully registered",
                    content = @Content(schema = @Schema(implementation = UserResources.class))),
            @ApiResponse(responseCode = "400", description = "Invalid request payload",
                    content = @Content),
    })
    @PostMapping("/register")
    public ResponseEntity<?> registerAccount(@RequestBody @Valid RegisterRequest request) {
        try {
            User user = registerUseCase.execute(new RegisterCommand(
                    request.name(),
                    request.email(),
                    request.password(),
                    request.phoneNumber(),
                    request.city(),
                    request.state(),
                    request.userType()));

            StandardSuccessResponse<User> response = StandardSuccessResponse.<User>builder()
                    .data(user)
                    .message("Register account successful")
                    .status(HttpStatus.CREATED.value())
                    .build();
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception ex) {
            StandardErrorResponse response = StandardErrorResponse.builder()
                    .timestamp(Instant.now())
                    .status(HttpStatus.NOT_FOUND.value())
                    .message(ex.getMessage())
                    .code("NOT_FOUND")
                    .build();

            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }
}
