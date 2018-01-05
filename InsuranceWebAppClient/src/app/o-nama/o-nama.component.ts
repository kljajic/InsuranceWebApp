import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';
import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';

@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.component.html',
  styleUrls: ['./o-nama.component.css']
})
export class ONamaComponent implements OnInit {

  osiguravajucaKuca: OsiguravajucaKuca;

  constructor(private route: ActivatedRoute,
              private osiguravajucaKucaService: OsiguravajuceKuceService) { }

  ngOnInit() {
    let osiguravajucaKucaId = +this.route.snapshot.params['id']
    this.osiguravajucaKucaService.getOsiguravajucaKuca(osiguravajucaKucaId).then(response => this.osiguravajucaKuca = response);
  }

}
