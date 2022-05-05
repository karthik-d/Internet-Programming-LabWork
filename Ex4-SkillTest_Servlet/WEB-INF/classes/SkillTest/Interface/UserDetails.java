package SkillTest.Interface;
import java.util.*;

public class UserDetails{
    String name = "";
    String password = "";
    String email = "";

    public UserDetails(String email, String name, String password){
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public String getName(){
        return this.name;
    }

    public String getEmail(){
        return this.email;
    }

}