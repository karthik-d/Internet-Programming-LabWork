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
        String action = request.getParameter("action");
        boolean logout = false;
        System.out.println("Action: " + action);
        if(action!=null && action.equals("logout")){
            // destroy the current session
            HttpSession session = request.getSession(false);
            if(session!=null){
                session.invalidate();
                System.out.println("Session invalidated");
            }
            System.out.println("logout flag set");  
            logout = true;
        }
        Cookie ck;
        Cookie cks[] = request.getCookies();
        String user_email = null;
        if(cks!=null){
            for(int i=0;i<cks.length;i++){
                System.out.println("Checking cookie: " + cks[i].getName());
                if(cks[i].getName().equals("login_email")){
                    user_email = cks[i].getValue();
                    if(logout){
                        // Delete the cookie
                        ck = new Cookie(cks[i].getName(), "");
                        ck.setValue("");
                        ck.setPath("/");
                        ck.setMaxAge(0);
                        response.addCookie(ck);
                        System.out.println("Cookie deleted");
                    }
                    break;
                }
            }
        }
        
        if(!logout && user_email!=null){
            // render the registration page
            System.out.println("User is logged in:  " + user_email);
            response.sendRedirect("http://localhost:8080/E5-Sessions/register");
        }
        else{
            // always render the login page if NOT logged in
            System.out.println("User NOT logged in:  ");
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("login.html"));
            view.forward(request, response);
        }
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{

        response.setContentType("text/html");
        PrintWriter render = response.getWriter();

        HttpSession session = null;

        Enumeration param_names = request.getParameterNames();
        while(param_names.hasMoreElements()){
            System.out.println(param_names.nextElement().toString());
        }

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
                System.out.println("Session obtained!: " + session);
                session.setAttribute("uname", user.getName());
                session.setAttribute("email", user.getEmail());
                System.out.println(user.getRole());
                render.println("Welcome, " + user.getName() + "!");
                // Create cookie for user
                System.out.println("Cookie set: " + user.getEmail());
                Cookie ck = new Cookie("login_email", user.getEmail());
                response.addCookie(ck);
                // Display session count, if admin
                System.out.println("User role: " + user.getRole());
                if(user.getRole()!=null && user.getRole().equals("admin")){
                    ServletContext ctx = getServletContext();  
                    System.out.println("usercount attribute:");
                    System.out.println(ctx.getAttribute("usercount"));
                    int count = (Integer)ctx.getAttribute("usercount");  
                    render.println("\nActive Sessions: " + count);
                }
            }
            if(user!=null){
                render.println("<br /><a href='http://localhost:8080/E5-Sessions/register'>TechCon Event Registration</a>");
            }
            render.println("</p>");
            }
        catch(Exception E)
        {
            System.out.println("HERE:" + E);
        }
    }
}