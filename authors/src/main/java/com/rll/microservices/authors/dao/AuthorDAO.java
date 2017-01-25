package com.rll.microservices.authors.dao;

import com.rll.microservices.authors.model.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthorDAO extends MongoRepository<Author, String> {


}
