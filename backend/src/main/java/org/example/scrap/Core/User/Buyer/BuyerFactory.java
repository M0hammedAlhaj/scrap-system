package org.example.scrap.Core.User.Buyer;

import org.example.scrap.Application.User.Auth.RegisterAccount.RegisterCommand;
import org.example.scrap.Core.User.Factory.UserFactory;
import org.example.scrap.Core.User.PasswordEncryptor;
import org.example.scrap.Core.User.User;
import org.springframework.stereotype.Component;

@Component
public class BuyerFactory extends UserFactory {
    public BuyerFactory(PasswordEncryptor passwordEncryptor) {
        super(passwordEncryptor);
    }

    @Override
    public User createUser(RegisterCommand command) {
        Buyer buyer = new Buyer();
        setCommonField(buyer, command);
        return buyer;
    }
}
