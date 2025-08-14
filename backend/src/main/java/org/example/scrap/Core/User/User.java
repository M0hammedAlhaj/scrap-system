package org.example.scrap.Core.User;

import lombok.Getter;
import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "users")
@Getter
public abstract class User extends BaseDocument {
    @Id
    private String id;

    private String email;

    private String password;

    private String type;

    private String phoneNumber;
}