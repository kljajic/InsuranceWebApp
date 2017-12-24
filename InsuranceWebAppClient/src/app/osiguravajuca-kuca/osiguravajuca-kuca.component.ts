import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';

import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';

@Component({
  selector: 'app-osiguravajuca-kuca',
  templateUrl: './osiguravajuca-kuca.component.html',
  styleUrls: ['./osiguravajuca-kuca.component.css']
})
export class OsiguravajucaKucaComponent implements OnInit {

  osiguravajucaKuca: OsiguravajucaKuca;

  constructor(private route: ActivatedRoute,
              private osiguravajuceKuceService: OsiguravajuceKuceService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.osiguravajuceKuceService.getOsiguravajucaKuca(id)
          .then(osiguravajucaKuca => this.osiguravajucaKuca = osiguravajucaKuca);
    this.osiguravajuceKuceService.changeState(true);
    this.osiguravajuceKuceService.updateId(id);
  }

}
