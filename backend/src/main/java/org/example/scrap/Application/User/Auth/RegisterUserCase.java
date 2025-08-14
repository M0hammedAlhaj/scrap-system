package org.example.scrap.Application.User.Auth;

import lombok.AllArgsConstructor;
import org.example.scrap.Core.User.User;
import org.example.scrap.Core.User.UserFactory;
import org.example.scrap.Core.User.UserFactoryProvider;
import org.example.scrap.Core.User.UserRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegisterUserCase {
    private final UserRepository userRepository;
    private final UserFactoryProvider userFactoryProvider;

    public User execute(RegisterCommand command) {
        UserFactory factory = userFactoryProvider.getFactory(command.type());
        User user = factory.createUser(command.email(), command.password(), command.phoneNumber());
        userRepository.save(user);
        return user;
    }
}
