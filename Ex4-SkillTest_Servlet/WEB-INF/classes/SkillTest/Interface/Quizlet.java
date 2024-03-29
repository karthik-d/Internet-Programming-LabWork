package SkillTest.Interface;

import java.util.*;

public class Quizlet{

    ArrayList<String> questions = null;
    ArrayList<String> question_ids = null;
    ArrayList<String> option_As = null;
    ArrayList<String> option_Bs = null;
    ArrayList<String> option_Cs = null;
    ArrayList<String> correct_options = null;
    ArrayList<String> skills = null;

    public Quizlet(ArrayList question_ids, ArrayList questions, ArrayList option_As, ArrayList option_Bs, ArrayList option_Cs){
        this.question_ids = question_ids;
        this.questions = questions;
        this.option_As = option_As;
        this.option_Bs = option_Bs;
        this.option_Cs = option_Cs;
    }

    public Quizlet(ArrayList question_ids, ArrayList correct_options, ArrayList skills){
        this.question_ids = question_ids;
        this.correct_options = correct_options;
        this.skills = skills;
    }

    public ArrayList getQuestionIds(){
        return this.question_ids;
    }

    public ArrayList getQuestions(){
        return this.questions;
    }

    public ArrayList getOptionAs(){
        return this.option_As;
    }

    public ArrayList getOptionBs(){
        return this.option_Bs;
    }

    public ArrayList getOptionCs(){
        return this.option_Cs;
    }

    public ArrayList getCorrectOptions(){
        return this.correct_options;
    }

    public ArrayList getSkills(){
        return this.skills;
    }

}