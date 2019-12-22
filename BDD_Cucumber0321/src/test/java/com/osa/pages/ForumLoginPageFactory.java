package com.osa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ForumLoginPageFactory {
	public ForumLoginPageFactory(WebDriver dr) {
		PageFactory.initElements(dr, this);
	}
	@FindBy(xpath="//*[@id=\"username\"]") 
	public WebElement userName;
	@FindBy(id="password")
	public WebElement password;
	@FindBy(xpath="//*[@id=\"login_button\"]")
	public WebElement loginButton;
	
	public void enterUserName(String user) {
		
		userName.sendKeys(user);
	}
	public void enterPassword(String pass) {
		password.sendKeys(pass);
	}
	public void clickOnLoginButton() {
		loginButton.click();
	}
}
