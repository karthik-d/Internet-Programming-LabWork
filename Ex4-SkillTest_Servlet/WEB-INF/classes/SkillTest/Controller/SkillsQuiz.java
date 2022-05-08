package SkillTest.Controller;

import SkillTest.Model.*;
import SkillTest.Interface.*;
import SkillTest.Exception.*;

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
        try{
            String email = "karthik@gmail.com";
            
            QuizBank quiz_handle = new QuizBank();
            Quizlet quiz_questions = quiz_handle.getRandomQuestionsForUser(email);
            System.out.println("HERE:");
            System.out.println(quiz_questions.getQuestionIds());

            /* Construct HTML for Questions */
            String quiz_html = "";
            for(int i=0;i<quiz_questions.getQuestions().size();i++){
                quiz_html += "<div class='TechConRegister__QfieldWrapper'><label class='TechConRegister__Qlabel'>";
                quiz_html += String.format(
                    "Q%d: %s",
                    i+1,
                    quiz_questions.getQuestions().get(i)
                );
                quiz_html += "<br /></label><div class='TechConRegister__inputWrapper'><div class='TechConRegister__radioIn'>"; 
                    
                quiz_html += String.format(
                    "<input type='radio' name='%s' value='a' required> <label>%s</label><br />",
                    quiz_questions.getQuestionIds().get(i),
                    quiz_questions.getOptionAs().get(i)
                );
                quiz_html += String.format(
                    "<input type='radio' name='%s' value='b' required> <label>%s</label><br />",
                    quiz_questions.getQuestionIds().get(i),
                    quiz_questions.getOptionBs().get(i)
                );
                quiz_html += String.format(
                    "<input type='radio' name='%s' value='c' required> <label>%s</label><br />",
                    quiz_questions.getQuestionIds().get(i),
                    quiz_questions.getOptionCs().get(i)
                );
                quiz_html += "</div></div></div>";
            }

            request.setAttribute("quizpalette", quiz_html);
            RequestDispatcher view = request.getRequestDispatcher(getViewPath("quiz.jsp"));
            view.forward(request, response);
        }
        catch(NoSkillsFoundException e){
            System.out.println(e);
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
}