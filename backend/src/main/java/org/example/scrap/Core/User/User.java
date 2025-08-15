package org.example.scrap.Core.User;

import lombok.Data;
import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "users")
@Data
public abstract class User extends BaseDocument {
    private String email;

    private String password;

    private String type;

    private String phoneNumber;
}