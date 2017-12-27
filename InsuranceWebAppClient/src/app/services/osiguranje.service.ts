import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Osiguranje } from '../shared/Osiguranje';
import { TipOsiguranja } from '../shared/TipOsiguranja';
import { TipAtributa } from '../shared/TipAtributa';
import { KontekstAtributa } from '../shared/KontekstAtributa';
import { PredefinisanaVrednost } from '../shared/PredefinisanaVrednost';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';

@Injectable()
export class OsiguranjeService {

  constructor(private http: Http) { }

  getTipOsiguranja(tipOsiguranjaId: number): Promise<TipOsiguranja>{
    return this.http.get('/api/tipoviOsiguranja/' + tipOsiguranjaId)
      .toPromise()
      .then(response => response.json() as TipOsiguranja)
      .catch(this.handleError);
  }

  getTipoviAtributaZaTipOsiguranja(tipOsiguranjaId: number): Promise<TipAtributa[]> {
    return this.http.get('/api/tipoviAtributa/zaTipOsiguranja/' + tipOsiguranjaId)
      .toPromise()
      .then(response => response.json() as TipAtributa[])
      .catch(this.handleError);
  }

  getTipoviAtributaZaKontekstAtributa(kontekstAtributaId: number): Promise<TipAtributa[]> {
    return this.http.get('/api/tipoviAtributa/zaKontekst/' + kontekstAtributaId)
      .toPromise()
      .then(response => response.json() as TipAtributa[])
      .catch(this.handleError);
  }

  getPredefinisaneVrednostiZaTipAtributa(tipAtributaId: number): Promise<PredefinisanaVrednost[]> {
    return this.http.get('/api/predefinisaneVrednosti/zaTipAtributa/' + tipAtributaId)
      .toPromise()
      .then(response => response.json() as PredefinisanaVrednost[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error("An error occured: ", error);
    return Promise.reject(error.message || error);
  }

}
