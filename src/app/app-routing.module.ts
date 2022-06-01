import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiabetesComponent } from './dietplan/diabetes/diabetes.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { GainComponent } from './dietplan/gain/gain.component';
import { GastroComponent } from './dietplan/gastro/gastro.component';
import { HyperComponent } from './dietplan/hyper/hyper.component';
import { LossComponent } from './dietplan/loss/loss.component';
import { NephroComponent } from './dietplan/nephro/nephro.component';
import { OncoComponent } from './dietplan/onco/onco.component';
import { PediaComponent } from './dietplan/pedia/pedia.component';
import { PregnancyComponent } from './dietplan/pregnancy/pregnancy.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';



const routes: Routes = [
  {path:" ", component:HomeComponent},
  {path:"dietplan", component:DietplanComponent},
  {path:"Gastro", component:GastroComponent},
  {path:"pedia", component:PediaComponent},
  {path:"nephro", component:NephroComponent},
  {path:"onco", component:OncoComponent},
  {path:"weightloss", component:LossComponent},
  {path:"weightgain", component:GainComponent},
  {path:"pregnancy", component:PregnancyComponent},
  {path:"diabetes", component:DiabetesComponent},
  {path:"hyper", component:HyperComponent},
  {path:"login", component:LoginComponent}, 
  {path:"signup", component:SignupComponent},
  {
    path: '**',
   component:HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
