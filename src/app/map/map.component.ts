import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 33.4081504;
  lng: number = -111.8044479;

  constructor() { }

  ngOnInit() {

  }

}
