package ftn.sep.tim2.client;

import org.springframework.web.client.RestTemplate;

import ftn.sep.tim2.controller.DatabaseUri;
import ftn.sep.tim2.model.OsiguravajucaKuca;

public class OsiguravajucaKucaClient {

	public OsiguravajucaKuca sendOsiguravajucaKuca(DatabaseUri databaseUri, Long osiguravajucaKucaId) {
		RestTemplate restTemplate = new RestTemplate();
		OsiguravajucaKuca ok = (OsiguravajucaKuca)restTemplate
				.getForObject(databaseUri.getDatabaseUri() + "/osiguravajuceKuce/" + osiguravajucaKucaId, OsiguravajucaKuca.class);
		System.out.println("poslata");
		return ok;
	}

}
