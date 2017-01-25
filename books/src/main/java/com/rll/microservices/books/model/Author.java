package com.rll.microservices.books.model;

public class Author {

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
        String format = "Author[id=%s, name='%s', lastname='%s']";
        return String.format(format, id, name, lastname);
    }
}