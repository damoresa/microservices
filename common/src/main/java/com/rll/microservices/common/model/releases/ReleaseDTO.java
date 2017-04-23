package com.rll.microservices.common.model.releases;

public class ReleaseDTO implements java.io.Serializable {
    private String release_id;
    private String release_title;
    private String release_date;

    public String getRelease_id() {
        return release_id;
    }

    public void setRelease_id(String release_id) {
        this.release_id = release_id;
    }

    public String getRelease_title() {
        return release_title;
    }

    public void setRelease_title(String release_title) {
        this.release_title = release_title;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }
}
