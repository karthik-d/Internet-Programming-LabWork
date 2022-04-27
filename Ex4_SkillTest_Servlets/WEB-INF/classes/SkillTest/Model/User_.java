package SkillTest.Model;

import java.util.*;

public class User_{

    public String getUserByEmail(String email){
        if(email.equals("jane@doe.com")){
            return email;
        }
        else{
            return null;
        }
    }

    public boolean verifyPassword(String email, String passwd_entry){
        return passwd_entry.equals("password");
    }

}