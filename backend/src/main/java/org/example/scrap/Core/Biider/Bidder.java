package org.example.scrap.Core.Biider;

import org.example.scrap.Core.shared.BaseDocument;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document(collection = "actions")
public class Bidder extends BaseDocument {
    private BigDecimal price;

    private String productId;

    private boolean success;
}
