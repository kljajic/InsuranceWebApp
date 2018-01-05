import { Component, OnInit } from '@angular/core';
import { KupiOsiguranjeService } from '../services/kupi-osiguranje.service';
import { TipOsiguranja } from '../shared/TipOsiguranja';
import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';
import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';

@Component({
  selector: 'app-kupi-osiguranje',
  templateUrl: './kupi-osiguranje.component.html',
  styleUrls: ['./kupi-osiguranje.component.css']
})
export class KupiOsiguranjeComponent implements OnInit {

  tipoviOsiguranja: TipOsiguranja[];  
  osiguravajucaKuca: OsiguravajucaKuca;

  constructor(private kupiOsiguranjeService: KupiOsiguranjeService,
              private osiguravajuceKuceService: OsiguravajuceKuceService) {
              
   }

  ngOnInit() {
    this.osiguravajuceKuceService.currentId.subscribe(id => this.getTipoviOsiguranja(id) );
  }

  getTipoviOsiguranja(id){
    this.kupiOsiguranjeService.getAllTypesOfInsurance(id)
      .then(tipoviOsiguranja => this.tipoviOsiguranja = tipoviOsiguranja); 
  }

}
