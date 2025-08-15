package org.example.scrap.Rest.Shared;

import lombok.Builder;

@Builder
public record StandardSuccessResponse<T>(T data,
                                         int status,
                                         String message) {
}
