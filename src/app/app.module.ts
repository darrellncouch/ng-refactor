import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MapComponent } from './map/map.component';
import { OfficesService } from './services/offices.service';
import { ZonesService } from './services/zones.service';
import { ProjectionTableComponent } from './projection-table/projection-table.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideMenuComponent,
    MapComponent,
    ProjectionTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQCADoAqWBHr-aIHcBzrfgqKD-HP5Kcjg'
    })
  ],
  providers: [OfficesService, ZonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
