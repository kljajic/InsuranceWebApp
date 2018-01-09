package ftn.sep.tim2.model;

import java.io.Serializable;
import java.util.List;

public class TipAtributa implements Serializable{

	private static final long serialVersionUID = 5218576756408205556L;
	private Long id;
	private String naziv;
	private DomenAtributa domen;
	private Boolean obavezan;
	private Boolean uticeNaCenu;
	private Boolean slobodnoPolje;
	private KontekstAtributa kontekst;
	private List<KontrolniAtribut> kontrolniAtributi;
	private List<PredefinisanaVrednost> predefinisaneVrednosti;
	private List<VrednostAtributaOsiguranja> vrednostiAtributa;
	private List<TipOsiguranja> tipoviOsiguranja;
	
	public TipAtributa() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public DomenAtributa getDomen() {
		return domen;
	}

	public void setDomen(DomenAtributa domen) {
		this.domen = domen;
	}

	public Boolean getObavezan() {
		return obavezan;
	}

	public void setObavezan(Boolean obavezan) {
		this.obavezan = obavezan;
	}

	public Boolean getUticeNaCenu() {
		return uticeNaCenu;
	}

	public void setUticeNaCenu(Boolean uticeNaCenu) {
		this.uticeNaCenu = uticeNaCenu;
	}

	public Boolean getSlobodnoPolje() {
		return slobodnoPolje;
	}

	public void setSlobodnoPolje(Boolean slobodnoPolje) {
		this.slobodnoPolje = slobodnoPolje;
	}

	public KontekstAtributa getKontekst() {
		return kontekst;
	}

	public void setKontekst(KontekstAtributa kontekst) {
		this.kontekst = kontekst;
	}

	public List<KontrolniAtribut> getKontrolniAtributi() {
		return kontrolniAtributi;
	}

	public void setKontrolniAtributi(List<KontrolniAtribut> kontrolniAtributi) {
		this.kontrolniAtributi = kontrolniAtributi;
	}

	public List<PredefinisanaVrednost> getPredefinisaneVrednosti() {
		return predefinisaneVrednosti;
	}

	public void setPredefinisaneVrednosti(List<PredefinisanaVrednost> predefinisaneVrednosti) {
		this.predefinisaneVrednosti = predefinisaneVrednosti;
	}

	public List<VrednostAtributaOsiguranja> getVrednostiAtributa() {
		return vrednostiAtributa;
	}

	public void setVrednostiAtributa(List<VrednostAtributaOsiguranja> vrednostiAtributa) {
		this.vrednostiAtributa = vrednostiAtributa;
	}

	public List<TipOsiguranja> getTipoviOsiguranja() {
		return tipoviOsiguranja;
	}

	public void setTipoviOsiguranja(List<TipOsiguranja> tipoviOsiguranja) {
		this.tipoviOsiguranja = tipoviOsiguranja;
	}
	
}
