package org.example.scrap.infrastructure.Jwt.Validation;


public record JwtValidationContext(String token, String expectedUserId) {
}
