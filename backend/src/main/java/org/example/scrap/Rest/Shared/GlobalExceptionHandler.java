package org.example.scrap.Rest.Shared;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;
import java.util.Optional;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<StandardErrorResponse> handleValidationErrors(MethodArgumentNotValidException ex) {
        String fieldMessages = ex.getBindingResult().getFieldErrors().stream()
                .map(fieldError -> fieldError.getField() + ": " +
                                   Optional.ofNullable(fieldError.getDefaultMessage()).orElse("Invalid value"))
                .collect(Collectors.joining(", "));

        StandardErrorResponse response = StandardErrorResponse.builder()
                .timestamp(Instant.now())
                .status(HttpStatus.BAD_REQUEST.value())
                .message("Validation failed: " + fieldMessages)
                .code("VALIDATION_ERROR")
                .build();

        return ResponseEntity.badRequest().body(response);
    }
}
