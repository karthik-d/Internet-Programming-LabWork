/* A simple session servlet program*/

package FirstServlet.WelcomeServlet;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.http.HttpServlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;

public class HittingUserServlet extends HttpServlet
{
public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException
{
HttpSession session=req.getSession(true);
resp.setContentType("text/html");
PrintWriter out = resp.getWriter();
out.println("Hai");
String login=req.getParameter("name");
String Qual=req.getParameter("qual");
String user=null;
String username=null;
Enumeration enm = getServletConfig().getInitParameterNames();
while (enm.hasMoreElements())
{ username=(String)enm.nextElement();
user=getInitParameter(username);
if(login.equals(user))
{
session.setAttribute(user,Qual);
break;
}
}
out.println("User: " + user);
out.println("Qualification: " + Qual);
}
}



