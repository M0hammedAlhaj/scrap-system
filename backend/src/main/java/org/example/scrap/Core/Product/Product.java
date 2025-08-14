package org.example.scrap.Core.Product;

import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;
import java.util.List;

@Document(collection = "products")
public class Product extends BaseDocument {
    private String name;

    private String description;

    @Field(name = "url_image")
    private String urlImage;

    private BigDecimal finalPrice;

    private BigDecimal initialPrice;

    private String sellerId;

    private List<String> bidderIds;
}