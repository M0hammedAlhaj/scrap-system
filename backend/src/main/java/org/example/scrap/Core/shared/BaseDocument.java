package org.example.scrap.Core.shared;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
public abstract class BaseDocument {
    @Id
    private final String id;

    @Field(name = "created_at")
    private final LocalDateTime createdAt;

    @Field(name = "updated_at")
    private LocalDateTime updatedAt;

    public BaseDocument() {
        id = UUID.randomUUID().toString();
        createdAt = LocalDateTime.now();
    }
}
