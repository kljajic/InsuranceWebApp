package ftn.sep.tim2.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DatabaseUri {
	
	@Value("${spring.data.database}")
	private String databaseUri;

	public String getDatabaseUri() {
		return databaseUri;
	}

	public void setDatabaseUri(String databaseUri) {
		this.databaseUri = databaseUri;
	}
}
