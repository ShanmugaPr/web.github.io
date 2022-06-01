import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { GastroComponent } from './dietplan/gastro/gastro.component';
import { PediaComponent } from './dietplan/pedia/pedia.component';
import { NephroComponent } from './dietplan/nephro/nephro.component';
import { OncoComponent } from './dietplan/onco/onco.component';
import { LossComponent } from './dietplan/loss/loss.component';
import { GainComponent } from './dietplan/gain/gain.component';
import { PregnancyComponent } from './dietplan/pregnancy/pregnancy.component';
import { DiabetesComponent } from './dietplan/diabetes/diabetes.component';
import { HyperComponent } from './dietplan/hyper/hyper.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DietplanComponent,
    GastroComponent,
    PediaComponent,
    NephroComponent,
    OncoComponent,
    LossComponent,
    GainComponent,
    PregnancyComponent,
    DiabetesComponent,
    HyperComponent,
    LoginComponent,
    SignupComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
