import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Output, EventEmitter } from '@angular/core';

@Injectable()
export class OsiguravajuceKuceService {

  constructor(private http: Http) { }

  //@Output() getOsiguravajucaKucaEmitter: EventEmitter<any> = new EventEmitter();

  private specificInsuranceCompany = new BehaviorSubject<boolean>(false);
  currentState = this.specificInsuranceCompany.asObservable();

  changeState(specific: boolean){
    this.specificInsuranceCompany.next(specific);
  }

  @Output() getCurrentId: EventEmitter<any> = new EventEmitter;

  updateId(id: number){
    this.getCurrentId.emit(id);
  }

  getOsiguravajuceKuce(): Promise<OsiguravajucaKuca[]> {
    return this.http.get('/api/osiguravajuceKuce')
      .toPromise()
      .then(response => response.json() as OsiguravajucaKuca[])
      .catch(this.handleError);
  }

  getOsiguravajucaKuca(id: number): Promise<OsiguravajucaKuca>{
    //this.getOsiguravajucaKucaEmitter.emit(this.http.get('/api/osiguravajuceKuce/'+id));    
    return this.http.get('/api/osiguravajuceKuce/'+id)
      .toPromise()
      .then(response => response.json() as OsiguravajucaKuca)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
