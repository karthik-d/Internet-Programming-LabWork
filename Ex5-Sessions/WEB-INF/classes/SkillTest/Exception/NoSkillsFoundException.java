package SkillTest.Exception;

public class NoSkillsFoundException extends Exception{

    public NoSkillsFoundException(String msg){
        super(msg);
    }

    public NoSkillsFoundException(){
        super("Could not find any matching skills");
    }

}