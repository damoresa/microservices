package com.rll.microservices.books.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {

    @Id
    public String id;
    public String isbn;
    public String title;
    public String description;
    public String author;

    public Book() {
        super();
    }

    public Book(String id, String isbn, String title, String description, String author) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.description = description;
        this.author = author;
    }

    @Override
    public String toString() {
        String format = "Book[id=%s, isbn=%s, title='%s', description='%s', author='%s']";
        return String.format(format, id, isbn, title, description, author);
    }
}
