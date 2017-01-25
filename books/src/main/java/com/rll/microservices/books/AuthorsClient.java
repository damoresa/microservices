package com.rll.microservices.books;

import com.netflix.discovery.converters.Auto;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.rll.microservices.books.model.Author;
import com.rll.microservices.books.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AuthorsClient {

    private final RestTemplate restTemplate;

    @Autowired
    public AuthorsClient(RestTemplate rest) {
        this.restTemplate = rest;
    }

    @HystrixCommand(fallbackMethod = "defaultAuthor")
    Author getAuthorData(Book book) {
        return this.restTemplate.getForObject(
                "http://authors-service/authors/{authorId}",
                Author.class, book.author);
    }

    Author defaultAuthor(Book book) {
        return new Author("0", "Unable to retrieve information", "");
    }
}
