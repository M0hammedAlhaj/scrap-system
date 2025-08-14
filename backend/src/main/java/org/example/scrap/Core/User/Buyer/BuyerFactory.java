package org.example.scrap.Core.User.Buyer;

import lombok.AllArgsConstructor;
import org.example.scrap.Core.User.PasswordEncryptor;
import org.example.scrap.Core.User.User;
import org.example.scrap.Core.User.UserFactory;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class BuyerFactory implements UserFactory {
    private final PasswordEncryptor passwordEncryptor;

    @Override
    public User createUser(String email, String password, String phoneNumber) {
        Buyer buyer = new Buyer();
        buyer.setEmail(email);
        buyer.setPassword(passwordEncryptor.hash(password));
        buyer.setPhoneNumber(phoneNumber);
        return buyer;
    }
}
