package com.rll.microservices.books;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.rll.microservices.books.model.Book;
import com.rll.microservices.common.model.authors.AuthorDTO;
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
    public AuthorDTO getAuthorData(Book book) {
        return this.restTemplate.getForObject(
                "http://authors-service/authors/{authorId}",
                AuthorDTO.class, book.author);
    }

    public AuthorDTO defaultAuthor(Book book) {

        AuthorDTO author = new AuthorDTO();
        author.setAuthor_id("0");
        author.setAuthor_name("Unable to retrieve author information");
        author.setAuthor_surname("");

        return author;
    }
}
