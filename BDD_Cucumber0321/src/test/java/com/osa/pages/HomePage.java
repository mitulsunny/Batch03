package com.osa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	WebDriver dr=null;
	public HomePage(WebDriver dr){ 
	
		this.dr=dr;
	    PageFactory.initElements(dr,this);   

		}
	
	
	  @FindBy(xpath=
	  "/html/body/div[2]/header/div[2]/div/div/div/div/nav/ul/li[1]/a") WebElement
	  homeLink;
	  
	  @FindBy(xpath="/html/body/div[2]/header/div[2]/div/div/div/div/nav/ul/li[2]/a") 
	  WebElement aboutLink;
	  
	  @FindBy(xpath=
	  "/html/body/div[2]/header/div[2]/div/div/div/div/nav/ul/li[3]/a") WebElement
	  coursesLink;
	  
	  @FindBy(xpath=
	  "/html/body/div[2]/header/div[2]/div/div/div/div/nav/ul/li[4]/a") WebElement
	  blogLink;
	  
	  @FindBy(xpath=
	  "/html/body/div[2]/header/div[2]/div/div/div/div/nav/ul/li[5]/a") WebElement
	  pageLink;
	  
	  @FindBy(xpath=
	  "/html/body/div[2]/header/div[2]/div/div/div/div/nav/ul/li[6]/a") WebElement
	  contactLink;
	 
	
	@FindBy(xpath="/html/body/div[2]/header/div[1]/div/div/div/div/div/div/div/a")
	WebElement forumLoginButton;
	
	
	
	  public void clickOnHomeLink() {
		  
		  homeLink.click(); 
		  }
	
	  public void clickOnAboutLink() {
		  aboutLink.click();
		  }
	  
	  public void clickOnCoursesLink() {
		  coursesLink.click(); 
		  }
	  
	  public void clickOnBlogLink() {
		  blogLink.click(); 
		  }
	  
	  public void clickOnPageLink() {
		  pageLink.click();
		  }
	  
	  public void clickOnContactLink() { 
		  contactLink.click(); 
		  }
	 
	public void  clickOnForumLogin() {
		forumLoginButton.click();
	
	}

}
