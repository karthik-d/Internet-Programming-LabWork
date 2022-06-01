package MVCdemo.Controller;
import MVCdemo.Model.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class CoffeeSelect extends HttpServlet
{
public void doPost(HttpServletRequest req, HttpServletResponse res)throws IOException,ServletException
{
String c = req.getParameter("color");
CoffeeExpert ce = new CoffeeExpert();
List result = ce.getBrands(c);

res.setContentType("text/html");
PrintWriter out = res.getWriter();
out.println("Coffee Selection Advice");

Iterator it = result.iterator();
while(it.hasNext())
{
out.println("try:"+it.next());
}
}
}





