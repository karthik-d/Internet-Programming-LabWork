//Demo using session handling
package SessionHandling.WithHTTPSessions;
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class FirstServlet extends HttpServlet{
public void doGet(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
{

HttpSession session = req.getSession();
String str=req.getParameter("tn");;
session.setAttribute("tn",str);
res.sendRedirect("SecServlet");
}}