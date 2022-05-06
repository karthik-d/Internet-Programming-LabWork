package SkillTest.Controller;

import SkillTest.utils.*;

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
        if(form_render!=null && form_render.equals("render")){            
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("registration.html"));
            view.forward(request, response);
        }
        else{            
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("about.html"));
            view.forward(request, response);
        }
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        Enumeration paramNames = request.getParameterNames();
        while(paramNames.hasMoreElements()){
            System.out.println(paramNames.nextElement());
        }
        
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
        String f_letter = request.getParameter("letter");

        System.out.println(StringManip.splitStringByChar("java|ruby|python", '|'));

        /*
        let form_fields = {
        "fullname": "Full Name",
        "colgname": "College Name",
        "colgaddr": "College Address",
        "colgPin": "PIN Code",
        "age": "Age",
        "dob": "Date of Birth",
        "gender": "Gender",
        "department": "Department",
        "contact": "Contact Number",
        "email": "Email ID",
        "skills": "Programming Skills",
        "letter": "Consent Letter"
    }
    */
    }
}