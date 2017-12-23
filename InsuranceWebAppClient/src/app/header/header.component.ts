import { Component, OnInit } from '@angular/core';

import { OsiguravajuceKuceService } from '../services/osiguravajuce-kuce.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentState: boolean;

  constructor(private osiguravajuceKuceService: OsiguravajuceKuceService) { }

  ngOnInit() {
    this.osiguravajuceKuceService.currentState.subscribe(currentState => this.currentState = currentState);
  }

}
