package org.example.scrap.Core.User.Factory;

import org.example.scrap.Core.User.Buyer.BuyerFactory;
import org.example.scrap.Core.User.Seller.SellerFactory;
import org.example.scrap.Core.User.UserType;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class UserFactoryProvider {
    private final Map<UserType, UserFactory> factories;

    public UserFactoryProvider(BuyerFactory buyerFactory, SellerFactory sellerFactory) {
        factories = Map.of(
                UserType.Buyer, buyerFactory,
                UserType.Seller, sellerFactory
        );
    }

    public UserFactory getFactory(UserType type) {
        UserFactory factory = factories.get(type);
        if (factory == null) {
            throw new IllegalArgumentException("Unknown role: " + type);
        }
        return factory;
    }
}
