package com.osa.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
@Before
public void beforeHo() {
 System.out.println("------Opening------------");
}
@After
public void afterHo() {
System.out.println("++++++++Closing+++++++++++++");
}
@Before("@Second")
public void beforeTHo() {
 System.out.println("*****************************");
}
@After("@Second")
public void beforeT() {
 System.out.println("*****************************");
}
}
