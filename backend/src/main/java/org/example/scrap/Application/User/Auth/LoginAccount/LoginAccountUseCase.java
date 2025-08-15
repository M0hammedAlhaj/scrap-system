package org.example.scrap.Application.User.Auth.LoginAccount;

import lombok.AllArgsConstructor;
import org.example.scrap.Core.User.Auth.UserAuthenticationException;
import org.example.scrap.Core.User.PasswordEncryptor;
import org.example.scrap.Core.User.User;
import org.example.scrap.Core.User.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class LoginAccountUseCase {
    private final UserRepository userRepository;
    private final PasswordEncryptor passwordEncryptor;

    public User execute(LoginAccountCommand command) {
        Optional<User> userOptional = userRepository.findByEmail(command.email());

        if (userOptional.isEmpty()) {
            passwordEncryptor.hash("dummy-password");
            throw new UserAuthenticationException();
        }

        User actualUser = userOptional.get();

        if (passwordEncryptor.matches(command.password(), actualUser.getPassword())) {
            return actualUser;
        }

        throw new UserAuthenticationException();
    }
}
