package org.example.scrap.Core.shared;

public interface BaseRepository<T> {
    T save(T entity);
}
