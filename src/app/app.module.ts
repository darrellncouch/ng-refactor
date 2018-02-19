import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MapComponent } from './map/map.component';
import { OfficesService } from './services/offices.service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideMenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OfficesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
