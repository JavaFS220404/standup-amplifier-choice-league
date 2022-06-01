import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubertComponentComponent } from './components/hubert-component/hubert-component.component';
import { SilvanComponentComponent } from './components/silvan-component/silvan-component.component';
import { TostartComponent } from './components/tostart/tostart.component';
import { IceAgeComponent } from './components/ice-age/ice-age.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HubertComponentComponent,
    SilvanComponentComponent,
    TostartComponent,
    IceAgeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
