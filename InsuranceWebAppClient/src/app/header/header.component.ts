import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';
import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentState: boolean;
  osiguravajucaKuca: OsiguravajucaKuca;

  constructor(private osiguravajuceKuceService: OsiguravajuceKuceService,
              private activatedRoute: ActivatedRoute, private router: Router) { 
                //this.osiguravajuceKuceService.getOsiguravajucaKucaEmitter.subscribe(osiguravajucaKuca => console.log(osiguravajucaKuca));     
                this.osiguravajuceKuceService.getCurrentId.subscribe(id=>this.findInsuranceCompanyById(id));
              }

  ngOnInit() {
    
    this.osiguravajuceKuceService.currentState.subscribe(currentState => this.currentState = currentState);
    //this.osiguravajuceKuceService.getOsiguravajucaKuca(1).then(osiguravajucaKuca => this.osiguravajucaKuca = osiguravajucaKuca);
  }

  findInsuranceCompanyById(id){
    this.osiguravajuceKuceService.getOsiguravajucaKuca(id).then(osiguravajucaKuca => this.osiguravajucaKuca = osiguravajucaKuca);
  }

}
