import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubertComponentComponent } from './hubert-component/hubert-component.component';
import { SilvanComponentComponent } from './components/silvan-component/silvan-component.component';
import { TostartComponent } from './components/tostart/tostart.component';

@NgModule({
  declarations: [
    AppComponent,
    HubertComponentComponent,
    SilvanComponentComponent,
    TostartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
