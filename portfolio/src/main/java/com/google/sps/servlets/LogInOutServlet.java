package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.appengine.repackaged.com.google.gson.Gson;

@WebServlet("/login")
public class LogInOutServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        UserService userService = UserServiceFactory.getUserService();
        response.setContentType("application/json;");
        if (!userService.isUserLoggedIn()) {
            String loginUrl = userService.createLoginURL("/index.html");
            response.getWriter().println((new Gson()).toJson("In"));
            response.sendRedirect(loginUrl);
            return;
        }
        String logoutUrl = userService.createLogoutURL("/index.html");
        response.getWriter().println((new Gson()).toJson("Out"));
        response.sendRedirect(logoutUrl);
    }
}
