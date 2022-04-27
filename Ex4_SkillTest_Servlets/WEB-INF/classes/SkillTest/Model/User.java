package SkillTest.Model;
import java.util.*;
import java.sql.*;

public class User
{
    public List getBrands(String color) throws Exception
    {

		String url = "jdbc:mysql://localhost:3306/iplab_db";
		String user = "iplab_root";
		String password = "ssnce";

		//2. Load JDBC Driver and register the driver
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();

		System.out.println("Hey I am after forname method");

		//3. Open a Connection
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/iplab_db?autoReconnect=true&useSSL=false",user,password);
		//Connection conn = DriverManager.getConnection(url,user,password);
		System.out.println("con--->"+con);

		Statement st = con.createStatement();
		System.out.println("Color Received from controller is " + color);
		//String sql="INSERT INTO coffeedetails(color,brand) VALUE('lightbrown','narasurs')";

		System.out.println("Hey I am after create statement");

		String s = "select id from test";
		ResultSet rs = st.executeQuery(s);

		//st.executeUpdate(sql);
		List coffeespec = new ArrayList();
		while(rs.next())
		{
			coffeespec.add(rs.getString(1)+ "   " + rs.getString(2));
		}
		System.out.println("Im from Model: " +coffeespec);
		
		//5.Close st and con : must use finally block
		st.close();
		con.close();
		return(coffeespec);
    }
}