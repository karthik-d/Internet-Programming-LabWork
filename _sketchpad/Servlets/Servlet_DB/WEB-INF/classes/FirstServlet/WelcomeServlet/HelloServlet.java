/* A simple servlet program*/

package FirstServlet.WelcomeServlet;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.http.HttpServlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class HelloServlet extends HttpServlet
{
public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException
{
response.setContentType("text/html");
PrintWriter out=response.getWriter();
out.println("<html>");
out.println("<head>");
out.println("<title> Hello Servlet</title>");
out.println("</head>");
out.println("<body>");
out.println("<h1> Welcome to Servlets</h1>");
out.println("</body>");
out.println("</html>");
}
}



