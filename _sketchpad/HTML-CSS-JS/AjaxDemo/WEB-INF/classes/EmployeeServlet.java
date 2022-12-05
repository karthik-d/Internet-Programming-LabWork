import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class EmployeeServlet extends HttpServlet {

protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
{
response.setContentType("text/html;charset=UTF-8");
       
PrintWriter out = response.getWriter();
String ss=request.getParameter("q");

String url = "jdbc:mysql://localhost:3306/ajaxdemo";
String user = "root";
String password = "ssn@123";
try{
//2. Load JDBC Driver and register the driver
Class.forName("com.mysql.cj.jdbc.Driver").newInstance();

System.out.println("Hey I am after forname method");

//3. Open a Connection
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ajaxdemo?allowPublicKeyRetrieval=true&useSSL=false",user,password);
//Connection conn = DriverManager.getConnection(url,user,password);
System.out.println("con--->"+con);

PreparedStatement ps=con.prepareStatement("select * from ajaxemployee where name=?");
System.out.println("Hey I am after prepared statement");
ps.setString(1,ss);
          ResultSet rs=ps.executeQuery();
          if(rs.next()){
              out.println("name is already existing");
          }
          else
                out.println("name doesnot already exist");
           
        }
       catch(Exception e)
        {
        e.printStackTrace();
        }
    
    }

   
}
