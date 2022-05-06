package SkillTest.utils;

import java.util.ArrayList;

public class StringManip{
    
    public static ArrayList splitStringByChar(String pool, char splitter){
        ArrayList<String> parts = new ArrayList<String>();
        String curr_part = "";
        for(int i=0;i<pool.length();i++){
            if(pool.charAt(i)!=splitter){
                curr_part += pool.charAt(i);
            }
            else{
                parts.add(curr_part);
                curr_part = "";
            }
        }
        if(curr_part!=""){
            parts.add(curr_part);
        }
        return parts;
    }
}