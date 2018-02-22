import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IOffice } from '../office';
import { IZone } from '../zone';
import { ICustomer } from './customer';

//services
import { OfficesService } from '../services/offices.service';
import { ZonesService } from '../services/zones.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  offices: IOffice[];
  zones: IZone[];
  customers: ICustomer[];
  listItemSelected = {
    zones: false,
    week: false,
    month: false,
    servicePlan: false
  }

  constructor(private officesService: OfficesService, private zonesService: ZonesService) { }

  ngOnInit() {

    this.getOffices();

  }

  handleOfficeSelect(e): void{
    this.getZones(e);
    this.getCustomers(e);
  }

  toggleListItem(itemClicked: string): void{
    switch(itemClicked){
      case "zones":
        this.listItemSelected.zones = !this.listItemSelected.zones;
        break;
      case "week":
        this.listItemSelected.week = !this.listItemSelected.week;
        break;
      case "month":
        this.listItemSelected.month = !this.listItemSelected.month;
        break;
      case "servicePlan":
        this.listItemSelected.servicePlan = !this.listItemSelected.servicePlan;
    }
  }

  getOffices(): void{
    this.officesService.getOffices()
      .subscribe(offices => this.offices = offices);
  }

  getZones(selectedOffice: number): void{
    this.zonesService.getZones(selectedOffice)
      .subscribe(zones => this.zones = zones);
  }

  @Output() officeEmitter: EventEmitter<number> = EventEmitter<number>();

  getCustomers(selectedOffice: number): void{
    this.customerService.getCustomers(selectedOffice)
      .subscribe(customers => this.customers = customers);
    this.officeEmitter.emit(selectedOffice)
  }

}
