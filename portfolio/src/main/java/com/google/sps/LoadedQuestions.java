package com.google.sps;

import java.util.ArrayList;
import java.util.List;

public class LoadedQuestions {
    public boolean thereIsMore;
    public boolean isLoggedIn;
    public List<Question> questions;

    public LoadedQuestions(boolean thereIsMore, boolean isUserLoggedIn) {
        this.thereIsMore = thereIsMore;
        this.isLoggedIn= isUserLoggedIn;
        this.questions = new ArrayList<>();
    }
    
}