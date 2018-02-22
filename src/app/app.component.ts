import { Component } from '@angular/core';


import { ICustomer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  customers: ICustomer[];



  }
}
