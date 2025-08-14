package org.example.scrap.Core.User;

import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public abstract class User {
    private String email;

    private String password;

    private String type;

    private String phoneNumber;
}

/*
    User{
    name:Mohammed,
    phone:078
    type:seller
        Product{
           {
           name:laptop,
           initPrice:10$,
                Bider{
                {bider_id:1,
                price:20},
                {bider_id:2,
                price:30
                }
           "}
    }
        User{
    name:Mohammed,
    phone:078
    type:bayer
        Product{
           {
           name:laptop,
           initPrice:10$,
           finalPrice:20$
                Bider{
                {bider_id:1,
                price:20},
                {bider_id:2,
                price:30
                }
           "}
    }

 */