
import java.io.*;  
import javax.servlet.*;  
import javax.servlet.http.*;  
  
  
public class WelcomeBookCookie extends HttpServlet {  
  
  public void doGet(HttpServletRequest req, HttpServletResponse res){  
    try{  
  
    res.setContentType("text/html");  
    PrintWriter out = res.getWriter();  
          
    String n=req.getParameter("name");  
    out.print("Welcome to "+n + " book");  
  
    Cookie ck=new Cookie("uname",n);//creating cookie object  
    res.addCookie(ck);//adding cookie in the response  
  
    //creating submit button  
    out.print("<form action='ThankCookie'>");  
    out.print("<input type='submit' value='go'>");  
    out.print("</form>");  
          
    out.close();  
  
        }catch(Exception e){System.out.println(e);}  
  }  
}  