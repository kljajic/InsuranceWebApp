package ftn.sep.tim2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ftn.sep.tim2.client.OsiguravajucaKucaClient;
import ftn.sep.tim2.model.OsiguravajucaKuca;

@RestController
@RequestMapping("/osiguravajuceKuce")
public class OsiguravajucaKucaController {

	@Autowired
	private DatabaseUri databaseUri;
	
	@GetMapping("/{osiguravajucaKucaId}")
	public OsiguravajucaKuca vratiOsiguravajucuKucu(@PathVariable("osiguravajucaKucaId")Long osiguravajucaKucaId){
		OsiguravajucaKucaClient okc = new OsiguravajucaKucaClient();
		OsiguravajucaKuca ok = okc.sendOsiguravajucaKuca(databaseUri, osiguravajucaKucaId);
		return ok;
	}
	
}
