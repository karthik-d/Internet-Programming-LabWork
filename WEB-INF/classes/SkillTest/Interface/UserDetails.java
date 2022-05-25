package SkillTest.Interface;
import java.util.*;

public class UserDetails{
    String name = "";
    String password = "";
    String email = "";
    String role = "";

    public UserDetails(String email, String name, String password, String role){
        this.email = email;
        this.name = name;
        this.password = password;
        this.role = role;
    }

    public String getName(){
        return this.name;
    }

    public String getEmail(){
        return this.email;
    }

    public String getRole(){
        return this.role;
    }

}