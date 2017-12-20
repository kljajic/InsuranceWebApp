package ftn.sep.tim2.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Polisa implements Serializable{

	private static final long serialVersionUID = -6901258118812785721L;

	public Polisa() {}
	
	private Long id;
	private Double cena;
	private List<Osiguranje> osiguranja;
	private Klijent klijent;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Double getCena() {
		return cena;
	}
	public void setCena(Double cena) {
		this.cena = cena;
	}
	public List<Osiguranje> getOsiguranja() {
		if(osiguranja == null) {
			return new ArrayList<Osiguranje>();
		}
		return osiguranja;
	}
	public void setOsiguranja(List<Osiguranje> osiguranja) {
		this.osiguranja = osiguranja;
	}
	public Klijent getKlijent() {
		return klijent;
	}
	public void setKlijent(Klijent klijent) {
		this.klijent = klijent;
	}

	

}
