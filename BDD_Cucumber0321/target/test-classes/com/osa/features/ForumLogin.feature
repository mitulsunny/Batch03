Feature: As user, I should be able to login Osa's forum
	@regression
  Scenario Outline: I should be able to login in osa's forum by using my usrname and password
    Given I am on Forum login page
    When I enter username <user> and Password <pass>
    Then I verify the login is successful
    And I close the browser
    Examples: 
      | user    | pass   | 
      | "user1" |"pass1" | 
      | "user2" |"pass2" | 
      | "user3" |"pass3" | 
      | "user4" |"pass4" | 
 
