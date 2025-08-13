package org.example.scrap.Core.User.Scrap;

import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public abstract class User extends BaseDocument {
    private String email;

    private String password;

    private String type;

    private String phoneNumber;

    private String role;
}
