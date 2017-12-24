import { Component, OnInit } from '@angular/core';
import { KupiOsiguranjeService } from '../services/kupi-osiguranje.service';
import { TipOsiguranja } from '../shared/TipOsiguranja';

@Component({
  selector: 'app-kupi-osiguranje',
  templateUrl: './kupi-osiguranje.component.html',
  styleUrls: ['./kupi-osiguranje.component.css']
})
export class KupiOsiguranjeComponent implements OnInit {

  constructor(private kupiOsiguranjeService: KupiOsiguranjeService) { }

  tipoviOsiguranja: TipOsiguranja[];
  
  ngOnInit() {
    //treba u backendu napraviti, nema...
    //this.kupiOsiguranjeService.getAllTypesOfInsurance()
      //.then(tipoviOsiguranja => this.tipoviOsiguranja = tipoviOsiguranja);
  }

}
