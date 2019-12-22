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
  "duration": 161225,
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
  "duration": 9144820864,
  "status": "passed"
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
  "duration": 120226536,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "duration": 61699220,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "duration": 5091331728,
  "status": "passed"
});
formatter.after({
  "duration": 88524,
  "status": "passed"
});
formatter.before({
  "duration": 104347,
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
  "duration": 7349850150,
  "status": "passed"
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
  "duration": 115495838,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "duration": 49124509,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "duration": 5091785897,
  "status": "passed"
});
formatter.after({
  "duration": 87242,
  "status": "passed"
});
formatter.before({
  "duration": 149679,
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
  "duration": 7288475091,
  "status": "passed"
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
  "duration": 129585296,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "duration": 60367936,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "duration": 5086414146,
  "status": "passed"
});
formatter.after({
  "duration": 128723,
  "status": "passed"
});
formatter.before({
  "duration": 92801,
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
  "duration": 7565290650,
  "status": "passed"
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
  "duration": 168077066,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_verify_the_login_is_successful()"
});
formatter.result({
  "duration": 60209276,
  "status": "passed"
});
formatter.match({
  "location": "ForumLogin.i_close_the_browser()"
});
formatter.result({
  "duration": 5097462135,
  "status": "passed"
});
formatter.after({
  "duration": 150534,
  "status": "passed"
});
});