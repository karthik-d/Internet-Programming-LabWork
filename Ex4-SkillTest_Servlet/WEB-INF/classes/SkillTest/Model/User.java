package SkillTest.Model;
import SkillTest.Interface.UserDetails;
import java.util.*;
import java.sql.*;

public class User
{

	String db_url = "jdbc:mysql://localhost:3306/iplab_db?autoReconnect=true&useSSL=false";
	String db_user = "iplab_root";
	String db_password = "ssnce";

	public UserDetails validateUser(String email, String password) throws Exception{
		/* Validate user and return name */
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		Connection con = DriverManager.getConnection(db_url, db_user, db_password);
		System.out.println("con--->"+con);
		/* Access data */
		Statement st = con.createStatement();
		String query = "SELECT email, name, password FROM users WHERE email='" + email + "'";
		/* Parse result */
		ResultSet rs = st.executeQuery(query);
		UserDetails ret_user = null;
		if(rs.next()){
			System.out.println("==== EMAIL WORKS ====" + password + " " + rs.getString(1));
			if(password.equals(rs.getString(3))){
				System.out.println("==== PASSWORD WORKS ====" + password + " " + rs.getString(3));
				ret_user = new UserDetails(rs.getString(1), rs.getString(2), rs.getString(3));
			}
		}
		st.close();
		con.close();
		return ret_user;
	}
	/*
    public List getBrands(String color) throws Exception
    {

		//2. Load JDBC Driver and register the driver
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();

		System.out.println("Hey I am after forname method");

		//3. Open a Connection
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/iplab_db?autoReconnect=true&useSSL=false", user, password);
		//Connection conn = DriverManager.getConnection(url,user,password);
		System.out.println("con--->"+con);

		Statement st = con.createStatement();
		//String sql="INSERT INTO coffeedetails(color,brand) VALUE('lightbrown','narasurs')";

		System.out.println("Hey I am after create statement");

		String s = "select id from test";
		ResultSet rs = st.executeQuery(s);

		//st.executeUpdate(sql);
		rs.next();
		String id_val = rs.getString(1);
		System.out.println("Im from Model: " + id_val);
		
		//5.Close st and con : must use finally block
		st.close();
		con.close();
		return new ArrayList();
    }
	*/
}
