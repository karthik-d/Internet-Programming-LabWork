package SkillTest.Controller;

import SkillTest.utils.*;
import SkillTest.Model.TechConRegistration;
import SkillTest.Interface.*;
import SkillTest.Exception.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class TechConRegister extends HttpServlet{
    private String BaseViewsPath = "/WEB-INF/views/techcon";

    private String getViewPath(String relPath){
        return BaseViewsPath + "/" + relPath;
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        String form_render = request.getParameter("form");
        if(form_render==null){
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("about.html"));
            view.forward(request, response);
        }
        else if(form_render.equals("render")){            
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("registration.html"));
            view.forward(request, response);
        }
        else{
            /* assume value is an email address and render corresponding form data */
            ;           
        }
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{

        try{
            Enumeration paramNames = request.getParameterNames();
            while(paramNames.hasMoreElements()){
                System.out.println(paramNames.nextElement());
            }

            // Read form fields
            String f_name = request.getParameter("fullname");
            String f_clg_name = request.getParameter("colgname");
            String f_clg_addr = request.getParameter("colgaddr");
            String f_clg_pin = request.getParameter("colgPin");
            String f_age = request.getParameter("age");
            String f_dob = request.getParameter("dob");
            String f_gender = request.getParameter("gender");
            String f_department = request.getParameter("department");
            String f_contact = request.getParameter("contact");
            String f_email = request.getParameter("email");
            String f_skills = request.getParameter("skills");
            String f_hobbies = request.getParameter("hobbies");
            String f_letter = request.getParameter("letter");

            // Process form fields
            ArrayList<String> skills_l = StringManip.splitStringByChar(f_skills, '|');
            System.out.println(StringManip.splitStringByChar(f_skills, '|'));

            // Seed the database
            TechConRegistration registration_handle = new TechConRegistration();
            RegistrationData registered_data = registration_handle.addRegistration(
                f_email,
                f_name,
                f_clg_name,
                f_clg_addr,
                f_clg_pin,
                f_age,
                f_dob,
                f_gender,
                f_department,
                f_contact,
                StringManip.splitStringByChar(f_skills, '|'),
                StringManip.splitStringByChar(f_hobbies, '|'),
                f_letter
            );
        }
        catch(AlreadyRegisteredException e){
            System.out.println("Already Registered!");
        }
        catch(Exception e){
            System.out.println("ERROR: " + e);
        }
    }
}