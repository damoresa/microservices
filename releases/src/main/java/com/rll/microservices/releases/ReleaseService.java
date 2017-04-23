package com.rll.microservices.releases;

import com.rll.microservices.releases.dao.ReleaseDAO;
import com.rll.microservices.releases.model.Release;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableEurekaClient
@EnableCircuitBreaker
@EnableMongoRepositories(basePackageClasses = { ReleaseDAO.class, Release.class })
@SpringBootApplication
public class ReleaseService {

    public static void main(String[] args) {
        SpringApplication.run(ReleaseService.class, args);
    }
}