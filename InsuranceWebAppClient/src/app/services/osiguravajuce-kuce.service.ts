import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { OsiguravajucaKuca } from '../shared/OsiguravajucaKuca';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OsiguravajuceKuceService {

  constructor(private http: Http) { }

  private specificInsuranceCompany = new BehaviorSubject<boolean>(false);
  currentState = this.specificInsuranceCompany.asObservable();

  changeState(specific: boolean){
    this.specificInsuranceCompany.next(specific);
  }

  getOsiguravajuceKuce(): Promise<OsiguravajucaKuca[]> {
    return this.http.get('/api/osiguravajuceKuce')
      .toPromise()
      .then(response => response.json() as OsiguravajucaKuca[])
      .catch(this.handleError);
  }

  getOsiguravajucaKuca(id: number): Promise<OsiguravajucaKuca>{
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
