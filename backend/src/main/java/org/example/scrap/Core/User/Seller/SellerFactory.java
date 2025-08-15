package org.example.scrap.Core.User.Seller;

import lombok.AllArgsConstructor;
import org.example.scrap.Core.User.PasswordEncryptor;
import org.example.scrap.Core.User.User;
import org.example.scrap.Core.User.Factory.UserFactory;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class SellerFactory implements UserFactory {
    private final PasswordEncryptor passwordEncryptor;

    @Override
    public User createUser(String email, String password, String phoneNumber) {
        Seller seller = new Seller();
        seller.setEmail(email);
        seller.setPassword(passwordEncryptor.hash(password));
        seller.setPhoneNumber(phoneNumber);
        return seller;
    }
}
