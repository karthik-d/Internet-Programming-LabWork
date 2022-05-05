package SkillTest.Controller;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class TechConRegistration extends HttpServlet{
    private String BaseViewsPath = "/WEB-INF/views/techcon";

    private String getViewPath(String relPath){
        return BaseViewsPath + "/" + relPath;
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        String form_render = request.getParameter("form");
        if(form_render.equals("render")){
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("about.html"));
            view.forward(request, response);
        }
        else{            
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("registration.html"));
            view.forward(request, response);
        }
    }
}