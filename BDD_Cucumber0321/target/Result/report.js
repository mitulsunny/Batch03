$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ForumLogin.feature");
formatter.feature({
  "line": 1,
  "name": "As user, I should be able to login Osa\u0027s forum",
  "description": "",
  "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "I should be able to login in osa\u0027s forum by using my usrname and password",
  "description": "",
  "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on Forum login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username \u003cuser\u003e and Password \u003cpass\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 9,
      "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;1"
    },
    {
      "cells": [
        "\"user1\"",
        "\"pass1\""
      ],
      "line": 10,
      "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;2"
    },
    {
      "cells": [
        "\"user2\"",
        "\"pass2\""
      ],
      "line": 11,
      "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;3"
    },
    {
      "cells": [
        "\"user3\"",
        "\"pass3\""
      ],
      "line": 12,
      "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;4"
    },
    {
      "cells": [
        "\"user4\"",
        "\"pass4\""
      ],
      "line": 13,
      "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 188068,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should be able to login in osa\u0027s forum by using my usrname and password",
  "description": "",
  "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on Forum login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username \"user1\" and Password \"pass1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ForumLogin.i_am_on_Forum_login_page()"
});
formatter.result({
  "duration": 112833036,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/afuruddin/Desktop/Stage/Batch03/BDD_Cucumber0321/C:\\Users\\obaidulla\\Desktop\\chromedriver.exe\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.osa.base.Browser.openBrowser(Browser.java:13)\n\tat com.osa.steps.ForumLogin.i_am_on_Forum_login_page(ForumLogin.java:21)\n\tat ✽.Given I am on Forum login page(ForumLogin.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 18
    },
    {
      "val": "pass1",
      "offset": 39
    }
  ],
  "location": "ForumLogin.i_enter_username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 49646,
  "status": "passed"
});
formatter.before({
  "duration": 65224,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should be able to login in osa\u0027s forum by using my usrname and password",
  "description": "",
  "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on Forum login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username \"user2\" and Password \"pass2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ForumLogin.i_am_on_Forum_login_page()"
});
formatter.result({
  "duration": 640573,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/afuruddin/Desktop/Stage/Batch03/BDD_Cucumber0321/C:\\Users\\obaidulla\\Desktop\\chromedriver.exe\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.osa.base.Browser.openBrowser(Browser.java:13)\n\tat com.osa.steps.ForumLogin.i_am_on_Forum_login_page(ForumLogin.java:21)\n\tat ✽.Given I am on Forum login page(ForumLogin.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 18
    },
    {
      "val": "pass2",
      "offset": 39
    }
  ],
  "location": "ForumLogin.i_enter_username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 51951,
  "status": "passed"
});
formatter.before({
  "duration": 82463,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I should be able to login in osa\u0027s forum by using my usrname and password",
  "description": "",
  "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on Forum login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username \"user3\" and Password \"pass3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ForumLogin.i_am_on_Forum_login_page()"
});
formatter.result({
  "duration": 543228,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/afuruddin/Desktop/Stage/Batch03/BDD_Cucumber0321/C:\\Users\\obaidulla\\Desktop\\chromedriver.exe\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.osa.base.Browser.openBrowser(Browser.java:13)\n\tat com.osa.steps.ForumLogin.i_am_on_Forum_login_page(ForumLogin.java:21)\n\tat ✽.Given I am on Forum login page(ForumLogin.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 18
    },
    {
      "val": "pass3",
      "offset": 39
    }
  ],
  "location": "ForumLogin.i_enter_username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41121,
  "status": "passed"
});
formatter.before({
  "duration": 67175,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I should be able to login in osa\u0027s forum by using my usrname and password",
  "description": "",
  "id": "as-user,-i-should-be-able-to-login-osa\u0027s-forum;i-should-be-able-to-login-in-osa\u0027s-forum-by-using-my-usrname-and-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on Forum login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username \"user4\" and Password \"pass4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ForumLogin.i_am_on_Forum_login_page()"
});
formatter.result({
  "duration": 685175,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/afuruddin/Desktop/Stage/Batch03/BDD_Cucumber0321/C:\\Users\\obaidulla\\Desktop\\chromedriver.exe\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.osa.base.Browser.openBrowser(Browser.java:13)\n\tat com.osa.steps.ForumLogin.i_am_on_Forum_login_page(ForumLogin.java:21)\n\tat ✽.Given I am on Forum login page(ForumLogin.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4",
      "offset": 18
    },
    {
      "val": "pass4",
      "offset": 39
    }
  ],
  "location": "ForumLogin.i_enter_username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39229,
  "status": "passed"
});
});