import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//interfaces
import { ICustomer } from '../customer';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(officeID: number): Observable<ICustomer[]>{
     return this.http.get<ICustomer[]>(`http://localhost:8000/customers${officeID}`)
  }

}
