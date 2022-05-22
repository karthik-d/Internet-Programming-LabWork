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

        HttpSession session = null;

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
                session = request.getSession(true);
                session.setAttribute("uname", user.getName());
                session.setAttribute("email", user.getEmail());
                System.out.println(user.getRole());
                render.println("Welcome, " + user.getName() + "!");
                if(user.getRole().equals("admin")){
                    ServletContext ctx = getServletContext();  
                    int count = (Integer)ctx.getAttribute("usercount");  
                    render.println("\nActive Sessions: " + count);
                }
            }
        }
        catch(Exception E)
        {
            System.out.println(E);
        }
        render.println("</p>");
    }
}