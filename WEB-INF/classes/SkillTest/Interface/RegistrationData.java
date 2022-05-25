package SkillTest.Interface;

import SkillTest.utils.StringManip;

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
        this.clg_addr = clg_addr;
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

    public String getCollegeName(){
        return this.clg_name;
    }

    public String getCollegeAddr(){
        return this.clg_addr;
    }

    public String getCollegePin(){
        return this.clg_pin;
    }

    public String getAge(){
        return this.age;
    }

    public String getDob(){
        return this.dob;
    }

    public String getGender(){
        return this.gender;
    }

    public String getDepartment(){
        return this.department;
    }

    public String getContact(){
        return this.contact;
    }

    public String getSkills(){
        return StringManip.stringReprOfArrayList(this.skills);
    }

    public String getHobbies(){
        return StringManip.stringReprOfArrayList(this.hobbies);
    }

    public String getLetter(){
        return this.letter;
    }

}