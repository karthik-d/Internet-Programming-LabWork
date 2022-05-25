package SkillTest.Exception;

public class RegistrationNotFoundException extends Exception {
    
    public RegistrationNotFoundException(String msg){
        super(msg);
    }
    
    public RegistrationNotFoundException(){
        super("Could not find a matching registration");
    }
    
}