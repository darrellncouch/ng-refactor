import { Component, OnInit } from '@angular/core';

import { IOffice } from '../office';

//services
import { OfficesService } from '../services/offices.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  offices: IOffice[];
  listItemSelected = {
    zones: false,
    week: false,
    month: false,
    servicePlan: false
  }

  constructor(private officesService: OfficesService) { }

  ngOnInit() {

    this.getOffices();

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
    console.log(this.offices)
  }

}
