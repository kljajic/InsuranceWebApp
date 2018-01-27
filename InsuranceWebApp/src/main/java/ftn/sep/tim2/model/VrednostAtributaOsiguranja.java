package ftn.sep.tim2.model;

import java.io.Serializable;

public class VrednostAtributaOsiguranja implements Serializable{

	private static final long serialVersionUID = -7767383711555084420L;
	private Long id;
	private String vrednost;
	private Integer kontrolniBroj;
	private TipAtributa tipAtributa;
	private Osiguranje osiguranje;
	
	public VrednostAtributaOsiguranja() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVrednost() {
		return vrednost;
	}

	public void setVrednost(String vrednost) {
		this.vrednost = vrednost;
	}

	public Integer getKontrolniBroj() {
		return kontrolniBroj;
	}

	public void setKontrolniBroj(Integer kontrolniBroj) {
		this.kontrolniBroj = kontrolniBroj;
	}

	public TipAtributa getTipAtributa() {
		return tipAtributa;
	}

	public void setTipAtributa(TipAtributa tipAtributa) {
		this.tipAtributa = tipAtributa;
	}

	public Osiguranje getOsiguranje() {
		return osiguranje;
	}

	public void setOsiguranje(Osiguranje osiguranje) {
		this.osiguranje = osiguranje;
	}
	
}
