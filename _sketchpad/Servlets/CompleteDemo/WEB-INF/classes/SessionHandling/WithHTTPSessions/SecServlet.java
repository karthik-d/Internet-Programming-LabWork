package SessionHandling.WithHTTPSessions;
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import javax.servlet.http.HttpSession;

public class SecServlet extends HttpServlet{
public void doGet(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
{

HttpSession session=req.getSession();
String str=session.getAttribute("tn").toString(); //getAttribute() gives the output in the object type
PrintWriter out = res.getWriter();
out.print("Welcome to " +str);

}}