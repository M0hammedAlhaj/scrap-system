package org.example.scrap.Core.User;

import lombok.Data;
import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "users")
@Data
public abstract class User extends BaseDocument {
    private String name;

    private String email;

    private String password;

    private String type;

    @Field(name = "phone_number")
    private String phoneNumber;

    private String city;

    private String state;
}