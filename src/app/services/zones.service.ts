import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from '@angular/Observable';
import { of } from 'rxjs/observable/of';

//Interfaces
import { IOffice } from '../office';
import { IZone } from '../zone';

@Injectable()
export class ZonesService {

  constructor(private http: HttpClient) { }

  getZones(officeID: number): Observable<IZone[]>{
    return this.http.get<IZone[]>(`http://localhost:8000/zones/${officeID}`)
  }

}
