package org.example.scrap.Core.User;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "users")
@Data
@NoArgsConstructor
public abstract class User extends BaseDocument {
    private String name;

    private String email;

    private String password;

    private String type;

    @Field(name = "phone_number")
    private String phoneNumber;

    private String city;

    private String state;

    protected User(
            String id,
            String name,
            String email,
            String password,
            String type,
            String phoneNumber,
            String city,
            String state,
            java.time.LocalDateTime createdAt,
            java.time.LocalDateTime updatedAt
    ) {
        super(id, createdAt, updatedAt);
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.state = state;
    }
}
