package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

/** Servlet that deletes a message. **/
@WebServlet("/delete-message")
public class DeleteQuestionServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    long id = Long.parseLong(request.getParameter("id"));
    Key questionEntityKey = KeyFactory.createKey("Question", id);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.delete(questionEntityKey);
  }
}
