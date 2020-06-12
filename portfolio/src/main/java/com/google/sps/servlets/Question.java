package com.google.sps.servlets;

public class Question {
    public long id;
    public String message;
    public String answer;
    public long time;
    public String image;

    public Question(long id, String message, String answer, long time, String image) {
        this.id = id;
        this.message = message;
        this.answer = answer;
        this.time = time;
        this.image = image;
    }
}
