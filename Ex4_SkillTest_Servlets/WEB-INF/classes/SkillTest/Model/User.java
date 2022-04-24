package SkillTest.Model;

import java.util.*;

class __User{
    
    String email;
    String passwd;

    public __User(String email, String passwd){
        this.email = email;
        this.passwd = passwd;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPasswd(){
        return this.passwd;
    }

}

public class User{

    public __User getUserByEmail(String email){
        if(email.equals("jane@doe.com")){
            return new __User("jane@doe.com", "password");
        }
        else{
            return null;
        }
    }

    public boolean verifyPassword(__User user, String passwd_entry){
        return passwd_entry.equals(user.getPasswd());
    }

}