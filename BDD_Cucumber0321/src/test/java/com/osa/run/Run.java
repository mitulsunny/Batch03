package com.osa.run;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/java/com/osa/features"},
		glue= {"com.osa.steps"},
		tags= {"@regression"},
		plugin= {"json:target/Destination/cucumber.json","pretty", "html:target/Result"}
		)
public class Run {

}
