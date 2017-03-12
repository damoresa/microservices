package com.rll.microservices.authors.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "authors")
public class Author {

    @Id
    public String id;
    public String name;
    public String lastname;

    public Author() {
        super();
    }

    public Author(String id, String name, String lastname) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
    }

    @Override
    public String toString() {
        String format = "AuthorDTO[id=%s, name='%s', lastname='%s']";
        return String.format(format, id, name, lastname);
    }
}
