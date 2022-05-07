package SillTest.Model;

import SkillTest.Interface.*;
import SkillTest.Exception.*;
import SkillTest.StringManip.*;

import java.util.*;

public class QuizBank{

    String db_url = "jdbc:mysql://localhost:3306/iplab_db?autoReconnect=true&useSSL=false";
	String db_user = "iplab_root";
	String db_password = "ssnce";

    public Quizlet getRandomQuestionsForUser(String email){
        Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        Connection con = DriverManager.getConnection(db_url, db_user, db_password);
        Statement st = con.createStatement();
        /* Get the user's skills */
        ArrayList<String> skills = new ArrayList<String>;
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
        /* Collect questions for each skill */
        ArrayList<String> question_ids = new ArrayList<String>;
        ArrayList<String> questions = new ArrayList<String>;
        ArrayList<String> option_As = new ArrayList<String>;
        ArrayList<String> option_Bs = new ArrayList<String>;
        ArrayList<String> option_Cs = new ArrayList<String>;
        query = String.format("SELECT id, question, option_a, option_b, option_c FROM techcon_questions WHERE skill in '%s' ORDER BY rand() LIMIT 2", StringManip.makeSqlChoiceList(skills));
        rs = st.executeQuery(query);
        while(rs.next()){
            questions_ids.add(rs.getString(1));
            questions.add(rs.getString(2));
            option_As.add(rs.getString(3));
            option_Bs.add(rs.getString(4));
            option_Cs.add(rs.getString(5));
        }

        System.out.println(question_ids);
        System.out.println(questions);

        return new Quizlet(question_ids, questions, option_As, option_Bs, option_Cs);
    }

}