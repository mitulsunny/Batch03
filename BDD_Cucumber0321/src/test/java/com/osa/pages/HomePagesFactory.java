package com.osa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagesFactory {
	
	public HomePagesFactory(WebDriver dr) {
		PageFactory.initElements(dr, this);
	}
	@FindBy(xpath="//a[text()='Forum Login']") 
	public WebElement forumLoginButton;
	@FindBy(xpath="(//a[text()='Courses'])[1]") 
	public WebElement coursesButton;
	
	public void clickOnForumLoginButton() {
		forumLoginButton.click();
	}
	public void clickOnCoursesButton() {
		coursesButton.click();
	}

}
