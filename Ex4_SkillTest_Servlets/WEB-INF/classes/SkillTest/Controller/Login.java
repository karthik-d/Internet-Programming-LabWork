package SkillTest.Controller;
import SkillTest.Model.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class Login extends HttpServlet{

    private String BaseViewsPath = "/WEB-INF/views";

    private String getViewPath(String relPath){
        return BaseViewsPath + "/" + relPath;
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        /*
        response.setContentType("text/html");
        PrintWriter render = response.getWriter();
        render.println("<html>");
        render.println("<body>");
        render.println("Hello there!");
        render.println("</body>");
        render.println("</html>");
        */
        RequestDispatcher view = request.getRequestDispatcher(getViewPath("login.html"));
        view.forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.setContentType("text/html");
        PrintWriter render = response.getWriter();

        String email = request.getParameter("email");

        User userMod = new User();
        String user = userMod.getUserByEmail(email);
        if (user == null){            
            render.println("<html><body>Not found</body></html>");
        }

        String passwd_entry = request.getParameter("passwd");
        if (passwd_entry.equals("password")){
            render.println("<html><body>Logged in</body></html>");
        }
        else{
            render.println("<html><body>Wrong password</body></html>");
        }
    }
}