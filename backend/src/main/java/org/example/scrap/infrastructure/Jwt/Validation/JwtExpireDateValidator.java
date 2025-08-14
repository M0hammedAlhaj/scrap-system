package org.example.scrap.infrastructure.Jwt.Validation;

import lombok.RequiredArgsConstructor;
import org.example.scrap.infrastructure.Cor.AbstractHandler;
import org.example.scrap.infrastructure.Jwt.Exception.JwtValidationException;
import org.example.scrap.infrastructure.Jwt.JwtExtracting;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtExpireDateValidator extends AbstractHandler<JwtValidationContext> {
    private final JwtExtracting jwtExtracting;

    @Override
    public void process(JwtValidationContext context) {
        Date expiration = jwtExtracting.extractExpireDate(context.token());
        if (expiration.before(new Date())) {
            throw new JwtValidationException("Token has expired.");
        }
    }
}
