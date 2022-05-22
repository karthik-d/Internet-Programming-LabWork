package SkillTest.Model;

import SkillTest.Interface.*;
import SkillTest.Exception.*;
import SkillTest.utils.*;

import java.sql.*;
import java.util.*;

public class QuizBank{

    String db_url = "jdbc:mysql://localhost:3306/iplab_db?autoReconnect=true&useSSL=false";
	String db_user = "iplab_root";
	String db_password = "ssnce";

    public Quizlet getRandomQuestionsForUser(String email) throws Exception{
        
        Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        Connection con = DriverManager.getConnection(db_url, db_user, db_password);
        Statement st = con.createStatement();
        
        /* Get the user's skills */
        ArrayList<String> skills = new ArrayList<String>();
        String query = String.format("SELECT skill FROM techcon_skills WHERE email='%s'", email);
        ResultSet rs = st.executeQuery(query);
        if(!rs.next()){
            throw new NoSkillsFoundException("No skills found for this user");
        }
        else{
            do{
                skills.add(rs.getString(1));
            }while(rs.next());
        }
        System.out.println(StringManip.makeSqlChoiceList(skills));
        
        /* Collect questions for each skill */
        ArrayList<String> question_ids = new ArrayList<String>();
        ArrayList<String> questions = new ArrayList<String>();
        ArrayList<String> option_As = new ArrayList<String>();
        ArrayList<String> option_Bs = new ArrayList<String>();
        ArrayList<String> option_Cs = new ArrayList<String>();
        query = String.format(
            "SELECT id, question, option_a, option_b, option_c FROM techcon_questions WHERE skill IN %s ORDER BY rand() LIMIT %d", 
            StringManip.makeSqlChoiceList(skills),
            (skills.size()*2)
        );
        rs = st.executeQuery(query);
        while(rs.next()){
            question_ids.add(rs.getString(1));
            questions.add(rs.getString(2));
            option_As.add(rs.getString(3));
            option_Bs.add(rs.getString(4));
            option_Cs.add(rs.getString(5));
        }

        System.out.println(question_ids);
        System.out.println(questions);

        return new Quizlet(question_ids, questions, option_As, option_Bs, option_Cs);
    }

    public Quizlet getVerificationPaletteForQuestions(ArrayList question_ids) throws Exception{
        
        Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        Connection con = DriverManager.getConnection(db_url, db_user, db_password);
        Statement st = con.createStatement();

        /* Collect responses */
        String query = String.format(
            "SELECT id, correct_option,skill FROM techcon_questions WHERE id IN %s ORDER BY skill",
            StringManip.makeSqlChoiceList(question_ids)
        );
        ResultSet rs = st.executeQuery(query);

        /*Make and return palette */
        ArrayList<String> q_ids = new ArrayList<String>();
        ArrayList<String> correct_options = new ArrayList<String>();
        ArrayList<String> skills = new ArrayList<String>();
        while(rs.next()){
            q_ids.add(rs.getString(1));
            correct_options.add(rs.getString(2));
            skills.add(rs.getString(3));
        } 
        return new Quizlet(q_ids, correct_options, skills);
    }

    public void storeScores(String user_email, ArrayList scores, ArrayList skills){
        Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        Connection con = DriverManager.getConnection(db_url, db_user, db_password);
        Statement st = con.createStatement();

        /* Add into `hobbies` */
        String query = "UPDATE techcon_skills SET score='%s' WHERE email='%s';";
        try{
            for(int i=0;i<skills.size();i++){      
                curr_query = String.format(query, scores.get(i), skills.get(i));
                st.executeUpdate(curr_query);
                System.out.println(curr_query);
            }      
        }
        catch(Exception e){
            System.out.println(e);
        }

    }

    /*
    INSERT INTO techcon_questions VALUES (1, "What paradigm does java follow?", "Pure OOP", "Hybrid OOP", "POP", 'a', "java"), (2, "When is object created when using the `new` keyword?", "Compile Time", "Run Time", "Access Time" , 'b', 'java'), (3, "Which web-framework is frequently correlated with Ruby?", "Gems", "Laravel", "Rails", 'c', 'Ruby'), (4, "What is the extension used to save ruby files?", ".rb", ".rby", '.ruby', 'a', 'Ruby'), (5, "Which data-type is instantiated using values enclosed within curly-braces in Python?", 'tuple', 'list', 'dictionary', 'c', 'Python'), (6, "What is Python's floor division operator?", "/", "//", "%", 'b', 'Python'), (7, "What are #-preceded statements in C++?", "Compiler Directives", "Comments", "Preproc Directives", 'c', 'C++'), (8, "What is the extension recommended for C++ header files?", '.h', '.hpp', '.head', 'b', 'C++');

    CREATE TABLE techcon_questions( id INTEGER PRIMARY KEY, question VARCHAR(30), option_a VARCHAR(20), option_b VARCHAR(20), option_c VARCHAR(20), correct_option VARCHAR(4), skill VARCHAR(20) );

    */

}