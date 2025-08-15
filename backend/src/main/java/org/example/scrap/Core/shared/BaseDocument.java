package org.example.scrap.Core.shared;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
public abstract class BaseDocument {
    @Id
    private String id;

    @Field(name = "created_at")
    private LocalDateTime createdAt;

    @Field(name = "updated_at")
    private LocalDateTime updatedAt;

    protected BaseDocument() {
        this.id = UUID.randomUUID().toString();
        this.createdAt = LocalDateTime.now();
    }

    protected BaseDocument(String id, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id != null ? id : UUID.randomUUID().toString();
        this.createdAt = createdAt != null ? createdAt : LocalDateTime.now();
        this.updatedAt = updatedAt;
    }
}
