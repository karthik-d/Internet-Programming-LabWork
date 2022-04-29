//Demo without using session handling
package LinkingServlets;
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;

public class FirstServlet extends HttpServlet{
public void doGet(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
{
RequestDispatcher rd=req.getRequestDispatcher("SecondServlet");
//rd.forward(req,res);

res.sendRedirect("SecondServlet");
}}