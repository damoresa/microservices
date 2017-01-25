package com.rll.microservices.authors;

import com.rll.microservices.authors.dao.AuthorDAO;
import com.rll.microservices.authors.model.Author;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableEurekaClient
@EnableMongoRepositories(basePackageClasses = { AuthorDAO.class, Author.class })
@SpringBootApplication
public class AuthorService {

    public static void main(String[] args) {
        SpringApplication.run(AuthorService.class, args);
    }
}