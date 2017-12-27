import { Component, OnInit } from '@angular/core';
import { OsiguranjeService } from '../services/osiguranje.service';

import { TipAtributa } from '../shared/TipAtributa';
import { TipOsiguranja } from '../shared/TipOsiguranja';
import { PredefinisanaVrednost } from '../shared/PredefinisanaVrednost';

@Component({
  selector: 'app-osiguranje',
  templateUrl: './osiguranje.component.html',
  styleUrls: ['./osiguranje.component.css']
})
export class OsiguranjeComponent implements OnInit {

  redniBroj: number = 1;
  tipOsiguranja: TipOsiguranja;
  tipoviAtributa: TipAtributa[];
  predefinisaneVrednosti: Map<number, PredefinisanaVrednost[]>;

  constructor(private osiguranjeService: OsiguranjeService) {
      this.predefinisaneVrednosti = new Map();
   }

  ngOnInit() {
    let tipOsiguranjaId = 1;
    this.osiguranjeService.getTipOsiguranja(tipOsiguranjaId).then(response => this.tipOsiguranja = response);
    this.osiguranjeService.getTipoviAtributaZaTipOsiguranja(tipOsiguranjaId)
      .then(response => {this.tipoviAtributa = response;
                         var index: number = 0;
                         for(index = 0; index < this.tipoviAtributa.length; index++){
                            this.getPredefinisaneVrednosti(this.tipoviAtributa[index].id);
                         }
                        });
  }

  getPredefinisaneVrednosti(tipAtributaId: number) {
      this.osiguranjeService.getPredefinisaneVrednostiZaTipAtributa(tipAtributaId)
        .then(response => this.predefinisaneVrednosti.set(tipAtributaId, response));
  }

  incrementKontekstNumber(){
    if(this.tipOsiguranja.brojFormi == this.redniBroj){
      return;
    }
    this.redniBroj++;
  }

  decrementKontekstNumber(){
    if(this.redniBroj == 1){
      return;
    }
    this.redniBroj--;
  }

  poruci(){

  }

}