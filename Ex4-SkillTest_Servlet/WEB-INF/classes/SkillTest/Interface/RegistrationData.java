package SkillTest.Interface;
import java.util.*;

public class RegistrationData{
    String name = "";
    String clg_name = "";
    String clg_addr = "";
    String clg_pin = "";
    String age = "";
    String dob = "";
    String gender = "";
    String department = "";
    String contact = "";
    String email = "";
    ArrayList<String> skills = new ArrayList<String>();
    ArrayList<String> hobbies = new ArrayList<String>();
    String letter = "";

    public RegistrationData(){
        ;
    }

    public RegistrationData(String email, String name, String clg_name, String clg_addr, String clg_pin, String age, String dob, String gender, String department, String contact, ArrayList skills, ArrayList hobbies, String letter){
        this.email = email;
        this.name = name;
        this.clg_name = clg_name;
        this.clg_pin = clg_pin;
        this.age = age;
        this.dob = dob;
        this.gender = gender;
        this.department = department;
        this.contact = contact;
        this.skills = skills;
        this.hobbies = hobbies;
        this.letter = letter;
    }

    public String getName(){
        return this.name;
    }

    public String getEmail(){
        return this.email;
    }

}