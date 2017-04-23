package com.rll.microservices.releases.dao;

import com.rll.microservices.releases.model.Release;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReleaseDAO extends MongoRepository<Release, String> {

}
