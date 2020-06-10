package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

/** Servlet that returns some example content. **/
@WebServlet("/add-answer")
public class AddAnswerServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String answer = request.getParameter("answer");
    if (!answer.equals("")) {
      long id = Long.parseLong(request.getParameter("question-id"));
      Key questionEntityKey = KeyFactory.createKey("Question", id);
      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      Entity entity;
      try {
        entity = datastore.get(questionEntityKey);
      } catch (EntityNotFoundException e) {
        return;
      }
      entity.setProperty("answer", answer);
      datastore.put(entity);
    }
    response.sendRedirect("/answer.html");
  }
}
