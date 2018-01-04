import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { OsiguranjeService } from '../services/osiguranje.service';

import { TipAtributa } from '../shared/TipAtributa';
import { TipOsiguranja } from '../shared/TipOsiguranja';
import { PredefinisanaVrednost } from '../shared/PredefinisanaVrednost';
import { KontekstAtributa } from '../shared/KontekstAtributa';
import { VrednostAtributaOsiguranja } from '../shared/VrednostAtributaOsiguranja';
import { Osiguranje } from '../shared/Osiguranje';

@Component({
  selector: 'app-osiguranje-modal',
  templateUrl: './osiguranje.component.html',
  styleUrls: ['./osiguranje.component.css']
})
export class OsiguranjeComponent implements OnInit {

  public modalRef: BsModalRef;

  choosenItem: string = '';
  redniBrojKonteksta: number = 1;
  tipOsiguranja: TipOsiguranja;
  konteksti: KontekstAtributa[];
  tipoviAtributa: Map<number, TipAtributa[]>; //KEY: redniBrojKonteksta, VALUE: TipAtributa[] (kontekstu sa ID pripadaju atributi)
  predefinisaneVrednosti: Map<number, PredefinisanaVrednost[]>; //KEY: tipAtributaId, VALUE: PredefinisanaVrednost[]

  osiguranje: Osiguranje;
  vrednostiAtributa: Map<number,VrednostAtributaOsiguranja>; //KEY: tipAtributaId, VALUE: VrednostAtributa

  constructor(private osiguranjeService: OsiguranjeService, private modalService: BsModalService) {
      this.tipoviAtributa = new Map();
      this.predefinisaneVrednosti = new Map();
      this.vrednostiAtributa = new Map();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  ngOnInit() {
    let tipOsiguranjaId = 3;
    this.osiguranjeService.getTipOsiguranja(tipOsiguranjaId).then(response => {
        this.tipOsiguranja = response;
        this.getKontekstiZaTipOsiguranja(tipOsiguranjaId);
    }); 
  }

  getKontekstiZaTipOsiguranja(tipOsiguranjaId: number){
    this.osiguranjeService.getKontekstiAtributaZaTipOsiguranja(tipOsiguranjaId)
      .then(response => {this.konteksti = response;
          var index: number = 0, kontekst: KontekstAtributa;
          for(index = 0; index < this.konteksti.length; index++){
            kontekst = this.konteksti[index];
            //if(!kontekst.visestrukoDodavanje){
              this.getTipoviAtributaZaKontekst(kontekst.id, kontekst.redniBrojForme);
            //}
          }
      });
  }

  getTipoviAtributaZaKontekst(kontekstaAtributaId: number, redniBrojForme: number){
    this.osiguranjeService.getTipoviAtributaZaKontekstAtributa(kontekstaAtributaId)
      .then(atributi => {
            var index: number = 0;
            this.tipoviAtributa.set(redniBrojForme, atributi);
            for(index = 0; index < atributi.length; index++){
              if(!atributi[index].slobodnoPolje){
                this.getPredefinisaneVrednosti(atributi[index].id);
              }
            }
            this.initializeVrednostiAtributa(redniBrojForme);
      });
  }

  getPredefinisaneVrednosti(tipAtributaId: number) {
    this.osiguranjeService.getPredefinisaneVrednostiZaTipAtributa(tipAtributaId)
      .then(response => this.predefinisaneVrednosti.set(tipAtributaId, response));
  }

  initializeVrednostiAtributa(redniBrojForme:number) {
    var atributi:TipAtributa[] = this.tipoviAtributa.get(redniBrojForme);
    for(var index in atributi){
      var vrednostAtributa: VrednostAtributaOsiguranja = new VrednostAtributaOsiguranja();
      vrednostAtributa.tipAtributa = atributi[index];
      vrednostAtributa.vrednost = '';
      this.vrednostiAtributa.set(atributi[index].id,vrednostAtributa);
    }
  }

  incrementKontekstNumber(){
    if(this.tipOsiguranja.brojFormi == this.redniBrojKonteksta){
      return;
    }
    this.redniBrojKonteksta++;
    if(this.konteksti[this.redniBrojKonteksta - 1].visestrukoDodavanje){
      alert('DOZVOLJAVA VISESTRUKO DODAVANJE');
      
    }
  }

  decrementKontekstNumber(){
    if(this.redniBrojKonteksta == 1){
      return;
    }
    this.redniBrojKonteksta--;
  }

  poruci(){
    console.log(this.vrednostiAtributa);
  }

  enteredValue($event){
    this.vrednostiAtributa.get(Number.parseInt($event.target.id)).vrednost = $event.target.value;
    console.log(this.vrednostiAtributa.get(Number.parseInt($event.target.id)));
  }

  removeSelection(tipAtributaId){
    var atributi: TipAtributa[] = this.tipoviAtributa.get(this.redniBrojKonteksta);
    for(var index in atributi){
      this.vrednostiAtributa.get(atributi[index].id).vrednost = "";
    }
  }

}