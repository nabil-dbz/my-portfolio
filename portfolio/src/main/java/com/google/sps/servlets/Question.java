package com.google.sps.servlets;

public class Question {
    public long id;
    public String message;
    public long time;

    public Question(long id, String message, long time) {
        this.id = id;
        this.message = message;
        this.time = time;
    }
}