package org.example.scrap.infrastructure.Cor;

public interface Handler<T> {
     void setNext(Handler<T> nextHandler);
     void handle(T request);
}
