package SkillTest.Exception;


public class AlreadyRegisteredException extends Exception{
    
    public AlreadyRegisteredException(String msg){
        super(msg);
    }

    public AlreadyRegisteredException(){
        super("This email has already been registered");
    }
}