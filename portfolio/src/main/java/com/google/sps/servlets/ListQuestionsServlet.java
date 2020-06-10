package com.google.sps.servlets;

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

        List<Question> questions = new ArrayList<>();
        boolean thereIsMore = false;
        int counter = 0;
        for (Entity entity: results.asIterable()) {
            if (counter == limit) {
                thereIsMore = true;
                break;
            }
            counter++;
            long id = entity.getKey().getId();
            String message = (String)entity.getProperty("question");
            String answer = (String)entity.getProperty("answer");
            long timestamp = (long)entity.getProperty("timestamp");
            String image = (String)entity.getProperty("image");
            Question question = new Question(id, message, answer, timestamp, image);
            questions.add(question);
        }

        response.setContentType("application/json;");
        String json = "{";
        json += "\"thereIsMore\": ";
        json += thereIsMore;
        json += ", ";
        json += "\"questions\": ";
        json += (new Gson()).toJson(questions);
        json += "}";
        response.getWriter().println(json);
    }
}
