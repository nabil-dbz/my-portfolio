package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;

/** Servlet that returns some example content. **/
@WebServlet("/add-answer")
public class AddAnswerServlet extends HttpServlet {
    /**
   *
   */
  private static final long serialVersionUID = 1L;

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String answer = request.getParameter("answer");
    String questionId = request.getParameter("question-id");
    if (!answer.equals("")) { 
        Query query = new Query("Question");
        DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
        PreparedQuery results = datastore.prepare(query);

        for (Entity entity: results.asIterable()) {
            long id = entity.getKey().getId();
            if (String.valueOf(id).equals(questionId)) {
                entity.setProperty("answer", answer);
                datastore.put(entity);
                return;
            }
        }
    }

    response.sendRedirect("/answer.html");
  }
}