package org.example.scrap.Core.User;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public abstract class User {

    @Id
    private String id;

    private String email;

    private String password;

    private String type;

    private String phoneNumber;
}