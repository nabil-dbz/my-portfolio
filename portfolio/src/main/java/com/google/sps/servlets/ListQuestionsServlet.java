package com.google.sps.servlets;

import com.google.sps.LoadedQuestions;
import com.google.sps.Question;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.appengine.repackaged.com.google.gson.Gson;

@WebServlet("/list-questions")
public class ListQuestionsServlet extends HttpServlet{

    private static final long serialVersionUID = 1L;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int limit;
        try {
            limit = Integer.parseInt(request.getQueryString());
        } catch (NumberFormatException e) {
            limit = 2;
        }
        Query query = new Query("Question").addSort("timestamp", SortDirection.DESCENDING);
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        PreparedQuery results = datastore.prepare(query);

        LoadedQuestions listQuestions = new LoadedQuestions(false, false);
        int counter = 0;
        for (Entity entity: results.asIterable()) {
            if (counter == limit) {
                listQuestions.thereIsMore = true;
                break;
            }
            counter++;
            long id = entity.getKey().getId();
            String message = (String)entity.getProperty("question");
            String answer = (String)entity.getProperty("answer");
            long timestamp = (long)entity.getProperty("timestamp");
            String image = (String)entity.getProperty("image");
            Question question = new Question(id, message, answer, timestamp, image);
            listQuestions.questions.add(question);
        }
        UserService userService = UserServiceFactory.getUserService();
        response.setContentType("application/json;");
        listQuestions.isLoggedIn = userService.isUserLoggedIn();
        response.getWriter().println((new Gson()).toJson(listQuestions));
    }
}
