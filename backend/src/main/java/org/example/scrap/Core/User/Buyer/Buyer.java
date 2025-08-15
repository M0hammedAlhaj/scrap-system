package org.example.scrap.Core.User.Buyer;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.example.scrap.Core.Biider.Bidder;
import org.example.scrap.Core.Product.Product;
import org.example.scrap.Core.User.User;

import java.time.LocalDateTime;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class Buyer extends User {
    private List<Product> products;
    private List<Bidder> bidders;

    protected Buyer(
            String id,
            String name,
            String email,
            String password,
            String type,
            String phoneNumber,
            String city,
            String state,
            LocalDateTime createdAt,
            LocalDateTime updatedAt,
            List<Product> products,
            List<Bidder> bidders
    ) {
        super(id, name, email, password, type, phoneNumber, city, state, createdAt, updatedAt);
        this.products = products;
        this.bidders = bidders;
    }
}