package FirstServlet.WelcomeServlet;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.http.HttpServlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;

/** ServletConfig and ServletContext */

public class ServletContextDemoServlet extends HttpServlet
{
public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException
{

PrintWriter out = resp.getWriter();
out.println("Hai ");
ServletContext ctx =getServletContext();
String str=ctx.getInitParameter("College-Name");
out.println("Hai " + str);
}
}

