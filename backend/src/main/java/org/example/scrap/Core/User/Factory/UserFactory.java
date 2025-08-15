package org.example.scrap.Core.User.Factory;

import lombok.AllArgsConstructor;
import org.example.scrap.Application.User.Auth.RegisterAccount.RegisterCommand;
import org.example.scrap.Core.User.PasswordEncryptor;
import org.example.scrap.Core.User.User;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public abstract class UserFactory {
    private final PasswordEncryptor passwordEncryptor;

    public abstract User createUser(RegisterCommand command);

    public void setCommonField(User user, RegisterCommand command) {
        String hash = passwordEncryptor.hash(command.password());
        user.setName(command.name());
        user.setEmail(command.email());
        user.setPassword(hash);
        user.setPhoneNumber(command.phoneNumber());
        user.setCity(command.city());
        user.setState(command.state());
    }
}
