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
import ftn.sep.tim2.model.TipOsiguranja;

@RestController
@RequestMapping("/api/tipoviOsiguranja")
public class TipOsiguranjaController {
	
	@Autowired
	private DatabaseUri databaseUri;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@SuppressWarnings("unchecked")
	@GetMapping("/{osiguravajucaKucaId}")
	@ResponseBody
	public List<TipOsiguranja> getTipoviOsiguranja(@PathVariable("osiguravajucaKucaId") Long osiguravajucaKucaId){
		return restTemplate.getForObject(databaseUri.getDatabaseUri()+"/tipoviOsiguranja/"+osiguravajucaKucaId, List.class);
	}

}
