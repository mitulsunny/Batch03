package com.osa.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HomePage {

	
	@Given("^I am navigating to OSA Consulting tech home page$")
	public void i_am_navigating_to_OSA_Consulting_tech_home_page() {
		System.out.println("Given");
	
	}
	@When("^I get the home page title$")
	public void i_get_the_home_page_title() {
		System.out.println("When");
		
	}
	@Then("^I verify the Home Page title is valid$")
	public void i_verify_the_Home_Page_title_is_valid() {
		System.out.println("Then");
		//Assert.assertEquals(2, 2);
	}
	@When("^I click on Forum Login buton$")
	public void i_click_on_Forum_Login_buton(){
	  System.out.println("Login Forum");

	  
	}

	@Then("^I should be able to see the Forum login page is displayed$")
	public void i_should_be_able_to_see_the_Forum_login_page_is_displayed() throws Throwable {
	   System.out.println("Displaing Login page"); 

	   
	}
	
}
