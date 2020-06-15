package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

@WebServlet("/post-id")
public class PostQuestionIdServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException { 
    UserService userService = UserServiceFactory.getUserService();
    if (!userService.isUserLoggedIn()) {
      String loginUrl = userService.createLoginURL("/login");
      response.sendRedirect(loginUrl);
      return;
    }
    if (!userService.isUserAdmin()) {
      RequestDispatcher rd = request.getRequestDispatcher("/WEB-INF/answer.jsp");
      rd.include(request, response);
      return;
    }
    response.sendRedirect("/index.html");
  }
}