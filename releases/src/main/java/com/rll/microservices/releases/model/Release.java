package com.rll.microservices.releases.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "releases")
public class Release {

    @Id
    public String id;
    public String title;
    public String date;

    public Release() {
        super();
    }

    public Release(String title, String date) {
        this.title = title;
        this.date = date;
    }

    @Override
    public String toString() {
        String format = "Release[id=%s, title='%s', date='%s']";
        return String.format(format, id, title, date);
    }
}
