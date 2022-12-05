package FirstServlet.WelcomeServlet;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.http.HttpServlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;

/** ServletConfig and ServletContext */

public class ServletConfigDemoServlet extends HttpServlet
{
public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException
{

PrintWriter out = resp.getWriter();
out.println("Hai ");
ServletConfig cg = getServletConfig();
String str1=cg.getInitParameter("Name");
out.println("Hai "+ str1);
String str2=cg.getInitParameter("Phone");
out.println("Phone " + str2);
}
}

