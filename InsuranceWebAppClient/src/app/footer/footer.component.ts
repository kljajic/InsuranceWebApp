import { Component, OnInit } from '@angular/core';

import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentState: boolean;

  constructor(private osiguravajuceKuceService: OsiguravajuceKuceService) { }

  ngOnInit() {
    this.osiguravajuceKuceService.currentState.subscribe(currentState => this.currentState = currentState);
  }

}
