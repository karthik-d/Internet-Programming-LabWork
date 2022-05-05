package SkillTest.Controller;
import SkillTest.Model.User;
import SkillTest.Interface.UserDetails;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class Login extends HttpServlet{

    private String BaseViewsPath = "/WEB-INF/views/users";

    private String getViewPath(String relPath){
        return BaseViewsPath + "/" + relPath;
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        RequestDispatcher view = request.getRequestDispatcher(getViewPath("login.html"));
        view.forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{

        response.setContentType("text/html");
        PrintWriter render = response.getWriter();

        render.println("<p>");
        User ce = new User();
        try{
            User user_db = new User();
            UserDetails user = user_db.validateUser(
                request.getParameter("email"),
                request.getParameter("passwd")
            );
            if(user==null){
                render.println("Could not validate user");
            }
            else{
                render.println("Welcome, " + user.getName() + "!");
            }
        }
        catch(Exception E)
        {
            System.out.println(E);
        }
        render.println("</p>");
    }
}