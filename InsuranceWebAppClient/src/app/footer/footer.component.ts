import { Component, OnInit } from '@angular/core';

import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';
import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentState: boolean;
  osiguravajucaKuca: OsiguravajucaKuca;  

  constructor(private osiguravajuceKuceService: OsiguravajuceKuceService) { 
    this.osiguravajuceKuceService.getCurrentId.subscribe(id=>this.findInsuranceCompanyById(id));    
  }

  ngOnInit() {
    this.osiguravajuceKuceService.currentState.subscribe(currentState => this.currentState = currentState);
  }

  findInsuranceCompanyById(id){
    this.osiguravajuceKuceService.getOsiguravajucaKuca(id).then(osiguravajucaKuca => this.osiguravajucaKuca = osiguravajucaKuca);
  }

}
