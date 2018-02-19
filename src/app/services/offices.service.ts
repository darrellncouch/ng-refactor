import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { IOffice } from '../office';

@Injectable()
export class OfficesService {

  constructor(private http: HttpClient) { }

     getOffices(): Observable<IOffice[]>{
       return this.http.get<IOffice>('http://localhost:8000/offices')
    }
  }
