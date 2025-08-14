package org.example.scrap.infrastructure.Jwt.Validation;

import lombok.AllArgsConstructor;
import org.example.scrap.infrastructure.Cor.AbstractHandler;
import org.example.scrap.infrastructure.Jwt.Exception.JwtValidationException;
import org.example.scrap.infrastructure.Jwt.JwtExtracting;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class JwtUserIdValidator extends AbstractHandler<JwtValidationContext> {

    private final JwtExtracting jwtExtracting;

    @Override
    public void process(JwtValidationContext context) {
        String actualId = jwtExtracting.extractId(context.token());

        if (!actualId.equals(context.expectedUserId())) {
            throw new JwtValidationException("User ID in token does not match the request");
        }
    }
}
