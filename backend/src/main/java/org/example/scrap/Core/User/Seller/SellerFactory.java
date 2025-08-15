package org.example.scrap.Core.User.Seller;

import org.example.scrap.Application.User.Auth.RegisterAccount.RegisterCommand;
import org.example.scrap.Core.User.Factory.UserFactory;
import org.example.scrap.Core.User.PasswordEncryptor;
import org.example.scrap.Core.User.User;
import org.springframework.stereotype.Component;

@Component
public class SellerFactory extends UserFactory {
    public SellerFactory(PasswordEncryptor passwordEncryptor) {
        super(passwordEncryptor);
    }

    @Override
    public User createUser(RegisterCommand command) {
        Seller seller = new Seller();
        setCommonField(seller, command);
        return seller;
    }
}
