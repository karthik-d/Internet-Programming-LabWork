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

    public static String stringReprOfArrayList(ArrayList arr){
        String result = "";
        for(int i=0;i<arr.size();i++){
            result += arr.get(i);
            result += ", ";
        }
        if(result!=""){
            result = result.substring(0, result.length()-2);
        }
        return result;
    }

    public static String makeSqlChoiceList(ArrayList arr){
        String result = "('";
        for(int i=0;i<arr.size();i++){
            result += arr.get(i);
            result += "', '";
        }
        if(result!="('"){
            result = result.substring(0, result.length()-3);
            result += ")";
        }
        else{
            result = "";
        }
        return result;
    }
}