package com.rll.microservices.books.dao;

import com.rll.microservices.books.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookDAO extends MongoRepository<Book, String> {

    Book findByIsbn(String isbn);
}
