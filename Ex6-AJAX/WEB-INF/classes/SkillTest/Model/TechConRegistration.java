package SkillTest.Model;

import SkillTest.Interface.*;
import SkillTest.Exception.*;

import java.util.*;
import java.sql.*;

public class TechConRegistration
{

	String db_url = "jdbc:mysql://localhost:3306/iplab_db?autoReconnect=true&useSSL=false";
	String db_user = "iplab_root";
	String db_password = "ssnce";

	public RegistrationData addRegistration(String email, String name, String clg_name, String clg_addr, String clg_pin, String age, String dob, String gender, String department, String contact, ArrayList skills, ArrayList hobbies, String letter) throws Exception{
		/* Insert form fields */
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		Connection con = DriverManager.getConnection(db_url, db_user, db_password);
		System.out.println("con--->"+con);
		
        /* Insert data into main registration */
		Statement st = con.createStatement();
		String query = String.format(
            "INSERT INTO techcon_registrations VALUES('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
            name,
            clg_name,
            clg_addr,
            clg_pin,
            age,
            dob,
            gender,
            department,
            contact,
            email,
            letter
        );
        try{
            st.executeUpdate(query);
        }
        catch(SQLIntegrityConstraintViolationException e){
            /* Email already registered */
            throw new AlreadyRegisteredException("Email already registered");
        }
        catch(Exception e){
            System.out.println(e);
        }

        /* Add into `skills` */
        query = "INSERT INTO techcon_skills VALUES";
        for(int i=0;i<skills.size();i++){            
            query += "('%s', '%s', NULL),";
            query = String.format(query, email, skills.get(i));
        }
        query = query.substring(0, query.length()-1) + ";";
        try{
            System.out.println("modified: " + query);
            System.out.println(query);
            st.executeUpdate(query);
        }
        catch(Exception e){
            System.out.println(e);
        }
		
        /* Add into `hobbies` */
        query = "INSERT INTO techcon_hobbies VALUES";
        for(int i=0;i<hobbies.size();i++){            
            query += "('%s', '%s'),";
            query = String.format(query, email, hobbies.get(i));
        }
        query = query.substring(0, query.length()-1) + ";";
        try{
            System.out.println("modified: " + query);
            st.executeUpdate(query);
        }
        catch(Exception e){
            System.out.println(e);
        }

        System.out.println("Registered in DB");
		st.close();
		con.close();

		return (new RegistrationData(
            email,
            name,
            clg_name,
            clg_addr, 
            clg_pin,
            age,
            dob,
            gender,
            department,
            contact,
            skills,
            hobbies,
            letter
        ));
	}

    public RegistrationData getRegistration(String email) throws Exception{

        Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        Connection con = DriverManager.getConnection(db_url, db_user, db_password);
        Statement st = con.createStatement();

        /* Get registration data */
        String query = String.format(
            "SELECT fullname, college, college_addr, college_pin, age, dob, gender, department, contact, letter FROM techcon_registrations WHERE email='%s';", 
            email
        );
        ResultSet rs = st.executeQuery(query);
        String name, clg_name, clg_addr, clg_pin, age, dob, gender, department, contact, letter;
        if(rs.next()){
            name = rs.getString(1);
            clg_name = rs.getString(2);
            clg_addr = rs.getString(3);
            clg_pin = rs.getString(4);
            age = rs.getString(5);
            dob = rs.getString(6);
            gender = rs.getString(7);
            department = rs.getString(8);
            contact = rs.getString(9);
            letter = rs.getString(10);
        }
        else{
            throw new RegistrationNotFoundException("No registrations under this email");
        }

        /* Retreive skills */
        ArrayList<String> skills = new ArrayList<String>();
        query = String.format("SELECT skill FROM techcon_skills WHERE email='%s'", email);
        rs = st.executeQuery(query);
        while(rs.next()){
            skills.add(rs.getString(1));
        } 

        /* Retreive hobbies */
        ArrayList<String> hobbies = new ArrayList<String>();
        query = String.format("SELECT hobby FROM techcon_hobbies WHERE email='%s'", email);
        rs = st.executeQuery(query);
        while(rs.next()){
            hobbies.add(rs.getString(1));
        } 

        System.out.println("Retreived registration data");

        return (new RegistrationData(
            email,
            name,
            clg_name,
            clg_addr, 
            clg_pin,
            age,
            dob,
            gender,
            department,
            contact,
            skills,
            hobbies,
            letter
        ));
        
    }

    /*
    CREATE TABLE techcon_registrations( fullname VARCHAR(30), college VARCHAR(20), college_addr VARCHAR(40), college_pin VARCHAR(10), age VARCHAR(4), dob DATE, gender  VARCHAR(10), department VARCHAR(10), contact VARCHAR(10), email VARCHAR(20) PRIMARY KEY, letter VARCHAR(20) );

    CREATE TABLE techcon_skills( email VARCHAR(20), skill VARCHAR(20), FOREIGN KEY (email) REFERENCES techcon_registrations(email) );

    CREATE TABLE techcon_hobbies( email VARCHAR(20), hobby VARCHAR(20), FOREIGN KEY (email) REFERENCES techcon_registration(email) );

    */

}