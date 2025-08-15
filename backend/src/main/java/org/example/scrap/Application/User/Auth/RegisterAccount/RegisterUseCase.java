package org.example.scrap.Application.User.Auth.RegisterAccount;

import lombok.AllArgsConstructor;
import org.example.scrap.Core.User.Factory.UserFactory;
import org.example.scrap.Core.User.Factory.UserFactoryProvider;
import org.example.scrap.Core.User.User;
import org.example.scrap.Core.User.UserRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegisterUseCase {
    private final UserRepository userRepository;
    private final UserFactoryProvider userFactoryProvider;

    public User execute(RegisterCommand command) {
        UserFactory factory = userFactoryProvider.getFactory(command.type());
        User user = factory.createUser(command);

        if (userRepository.existsByEmail(command.email())) {
            return user;
        }
        userRepository.save(user);
        return user;
    }
}
