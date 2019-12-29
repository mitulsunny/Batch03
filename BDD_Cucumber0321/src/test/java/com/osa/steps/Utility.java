package com.osa.steps;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class Utility {
	public static Logger getLog(Class clazz) {
		Logger log=Logger.getLogger(clazz);
		PropertyConfigurator.configure("src/test/resources/log4j.properties");
		return log;

}
}