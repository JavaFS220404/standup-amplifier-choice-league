import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubertComponentComponent } from './components/hubert-component/hubert-component.component';
import { IceAgeComponent } from './components/ice-age/ice-age.component';
import { SilvanComponentComponent } from './components/silvan-component/silvan-component.component';
import { TostartComponent } from './components/tostart/tostart.component';

const routes: Routes = [{
  path:"Tanuja",
  component: IceAgeComponent
},{
  path:"Hubert",
  component: HubertComponentComponent
},{
  path:"Jawdat",
  component: TostartComponent
},{
  path:"Silvan",
  component: SilvanComponentComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
