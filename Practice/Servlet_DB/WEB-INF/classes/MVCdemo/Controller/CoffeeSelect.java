package MVCdemo.Controller;
import MVCdemo.Model.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class CoffeeSelect extends HttpServlet //throws IOException,ServletException,Exception
{
public void doPost(HttpServletRequest request, HttpServletResponse res) //throws IOException //,Exception
{

String c = request.getParameter("color");
CoffeeExpert ce = new CoffeeExpert();
System.out.println("Before calling model");
try{
List result = ce.getBrands(c);
res.setContentType("text/html");
PrintWriter out = res.getWriter();
System.out.println("Coffee Selection Advice");
Iterator it = result.iterator();
while(it.hasNext())
{
out.println("try:"+it.next());
}
}
catch(Exception E)
{
System.out.println(E);

//request.setAttribute("styles",result);
//System.out.println("The result is " + result);
//System.out.println("String Returned");
}
}
}


//catch(Exception E)
//{
//System.out.println(E);


