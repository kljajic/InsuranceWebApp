import { Component, OnInit } from '@angular/core';

import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';
import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';

@Component({
  selector: 'app-osiguravajuce-kuce',
  templateUrl: './osiguravajuce-kuce.component.html',
  styleUrls: ['./osiguravajuce-kuce.component.css']
})
export class OsiguravajuceKuceComponent implements OnInit {

  osiguravajuceKuce: OsiguravajucaKuca[];

  constructor(private osiguravajuceKuceService: OsiguravajuceKuceService) { }

  ngOnInit() {
    this.osiguravajuceKuceService.getOsiguravajuceKuce()
      .then(osiguravajuceKuce => this.osiguravajuceKuce = osiguravajuceKuce);
    this.osiguravajuceKuceService.changeState(false);
  }

}
