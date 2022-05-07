package SkillTest.Controller;

import SkillTest.Model.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import java.io.*;

public class SkillsQuiz extends HttpServlet{
    private String BaseViewsPath = "/WEB-INF/views/techcon";

    private String getViewPath(String relPath){
        return BaseViewsPath + "/" + relPath;
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        /* Read email-id from Cookie */
        String email = "karthik@gmail.com";
        
        QuizBank quiz_handle = new QuizBank();
        Quizlet quiz_questions = quiz_handle.getRandomQuestionsForUser(email);

        request.setAttribute("quizdata", quiz_questions);
        RequestDispatcher view = request.RequestDispatcher(getViewPath("quiz.jsp"));
        view.forward(request, response);
    }
}