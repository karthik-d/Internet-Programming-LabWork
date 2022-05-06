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
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		Connection con = DriverManager.getConnection(db_url, db_user, db_password);
		System.out.println("con--->"+con);
		
        /* Insert data */
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

        System.out.println(query);

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
		
        System.out.println("DONE");
		st.close();
		con.close();
		return (new RegistrationData());
	}

    /*
    CREATE TABLE techcon_registrations( fullname VARCHAR(30), college VARCHAR(20), college_addr VARCHAR(40), college_pin VARCHAR(10), age VARCHAR(4), dob DATE, gender  VARCHAR(10), department VARCHAR(10), contact VARCHAR(10), email VARCHAR(20) PRIMARY KEY, letter VARCHAR(20) );

    CREATE TABLE techcon_skills( email VARCHAR(20), skill VARCHAR(20), FOREIGN KEY (email) REFERENCES techcon_registrations(email) );

    CREATE TABLE techcon_hobbies( email VARCHAR(20), hobby VARCHAR(20), FOREIGN KEY (email) REFERENCES techcon_registration(email) );

    */

}