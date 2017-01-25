package com.rll.microservices.authors;

import com.rll.microservices.authors.dao.AuthorDAO;
import com.rll.microservices.authors.model.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RefreshScope
@RestController
class AuthorsController {

    @Autowired
    private AuthorDAO authorDAO;

    @RequestMapping("/authors/init")
    void initAuthors() {

        Author author1 = new Author("1", "Daniel", "Amores");
        Author author2 = new Author("2", "Begoña", "Pacheco");

        authorDAO.save(Arrays.asList(author1, author2));
    }

    @RequestMapping("/authors")
    List<Author> getAuthors() {
        return authorDAO.findAll();
    }

    @RequestMapping("/authors/{id}")
    Author getAuthorById(@PathVariable("id") String id) {
        return authorDAO.findOne(id);
    }
}