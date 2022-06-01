
import java.io.*;  
import javax.servlet.*;  
import javax.servlet.http.*;  

  
public class ThankCookie extends HttpServlet {  
  
public void doGet(HttpServletRequest req, HttpServletResponse res){  
    try{  
  
    res.setContentType("text/html");  
    PrintWriter out = res.getWriter();  
      
    Cookie ck[]=req.getCookies();  
    
    out.print("Thank you for using "+ ck[0].getValue());  
  
    out.close();  
  
         }catch(Exception e)
{
System.out.println(e);
}  
    }  
      }

  
