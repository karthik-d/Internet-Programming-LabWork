package SkillTest.Listener;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class WebSessionListener implements HttpSessionListener {

    static int count = 0;
	ServletContext ctx = null;
 
    public void sessionCreated( HttpSessionEvent event) {
		System.out.println("Session created");
		count += 1;
		// Update context
		ctx = event.getSession().getServletContext();
		ctx.setAttribute("usercount", count);
    }
 
    public void sessionDestroyed( HttpSessionEvent event) {
        System.out.println("Session destroyed");
		count -= 1;
		// Update context
		ctx = event.getSession().getServletContext();
		ctx.setAttribute("usercount", count);
    }
  }