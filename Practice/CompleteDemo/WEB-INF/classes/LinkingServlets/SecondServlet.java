package LinkingServlets;
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
public class SecondServlet extends HttpServlet{
public void doGet(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
{

res.setContentType("text/html");
PrintWriter pw=res.getWriter();
String name=req.getParameter("t1");
pw.println("In the second servlet");

}}