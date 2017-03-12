package com.rll.microservices.books;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.rll.microservices.books.model.Book;
import com.rll.microservices.common.model.authors.AuthorDTO;
import com.rll.microservices.common.model.authors.GetAuthorResponse;
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
    public GetAuthorResponse getAuthorData(Book book) {
        return this.restTemplate.getForObject(
                "http://authors-service/authors/{authorId}",
                GetAuthorResponse.class, book.author);
    }

    public GetAuthorResponse defaultAuthor(Book book) {

        AuthorDTO author = new AuthorDTO();
        author.setAuthor_id("0");
        author.setAuthor_name("Unable to retrieve author information");
        author.setAuthor_surname("");

        GetAuthorResponse authorResponse = new GetAuthorResponse();

        authorResponse.setResult(author);

        return authorResponse;
    }
}
