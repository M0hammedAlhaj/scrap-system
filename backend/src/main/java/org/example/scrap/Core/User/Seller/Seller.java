package org.example.scrap.Core.User.Seller;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.scrap.Core.Product.Product;
import org.example.scrap.Core.User.User;

import java.time.LocalDateTime;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class Seller extends User {
    private List<Product> products;

    protected Seller(String id, String name, String email, String password, String type, String phoneNumber, String city, String state, LocalDateTime createdAt, LocalDateTime updatedAt, List<Product> products) {
        super(id, name, email, password, type, phoneNumber, city, state, createdAt, updatedAt);
        this.products = products;
    }
}
