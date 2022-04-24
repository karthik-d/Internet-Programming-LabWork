package SkillTest.Controller;
// import SkillTest.Model.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class Login extends HttpServlet{

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        response.setContentType("text/html");
        PrintWriter render = response.getWriter();
        render.println("<html>");
        render.println("<body>");
        render.println("Hello there!");
        render.println("</body>");
        render.println("</html>");
    }
}