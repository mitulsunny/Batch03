package com.osa.base;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Browser {

	public static WebDriver openBrowser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\obaidulla\\Desktop\\chromedriver.exe");
		WebDriver dr= new ChromeDriver();
		dr.manage().window().maximize();
		dr.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		return dr;
	}
	
}
