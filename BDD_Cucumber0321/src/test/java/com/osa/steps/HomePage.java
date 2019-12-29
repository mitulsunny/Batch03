package com.osa.steps;

import org.apache.log4j.Logger;

import com.osa.pages.HomePagesFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HomePage {
	public static Logger log=Utility.getLog(HomePage.class);
	
	@Given("^I am navigating to OSA Consulting tech home page$")
	public void i_am_navigating_to_OSA_Consulting_tech_home_page() {
		log.info("Printing Given....");
		System.out.println("Given");
		log.info("Printed Given word....");
	}
	@When("^I get the home page title$")
	public void i_get_the_home_page_title() {
		log.info("Printing When....");
		System.out.println("When");
		log.info("Printed When word....");
	}
	@Then("^I verify the Home Page title is valid$")
	public void i_verify_the_Home_Page_title_is_valid() {
		log.info("Printing Then....");
		System.out.println("Then");
		log.info("Printed Then");
		//Assert.assertEquals(2, 2);
	}
	@When("^I click on Forum Login buton$")
	public void i_click_on_Forum_Login_buton(){
		log.info("Printing Login Forum....");
	  System.out.println("Login Forum");
	  log.info("Printed Login Forum");
	  
	}

	@Then("^I should be able to see the Forum login page is displayed$")
	public void i_should_be_able_to_see_the_Forum_login_page_is_displayed() throws Throwable {
		log.info("Printing isplaing Login page....");
	   System.out.println("Displaing Login page"); 
	   log.info("Printed Displaing Login page");
	   
	}
	
}
