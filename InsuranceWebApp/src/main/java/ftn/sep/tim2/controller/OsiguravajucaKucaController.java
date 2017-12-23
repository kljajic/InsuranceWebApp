package ftn.sep.tim2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ftn.sep.tim2.config.DatabaseUri;
import ftn.sep.tim2.model.OsiguravajucaKuca;

@RestController
@RequestMapping("/api/osiguravajuceKuce")
public class OsiguravajucaKucaController {

	@Autowired
	private DatabaseUri databaseUri;
	
	@Autowired
	private RestTemplate restTemplate;
		
	@GetMapping("/{osiguravajucaKucaId}")
	public OsiguravajucaKuca vratiOsiguravajucuKucu(@PathVariable("osiguravajucaKucaId")Long osiguravajucaKucaId){
		return restTemplate.getForObject(databaseUri.getDatabaseUri() + "osiguravajuceKuce/"+osiguravajucaKucaId, OsiguravajucaKuca.class);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping()
	@ResponseBody
	public List<OsiguravajucaKuca> getOsiguravajuceKuce(){
		return restTemplate.getForObject(databaseUri.getDatabaseUri() + "osiguravajuceKuce", List.class);
	}
	
}
