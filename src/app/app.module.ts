import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule} from "@angular/forms";
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { LogoutComponent } from './logout/logout.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    DoctorListComponent,
    AnimalListComponent,
    LogoutComponent,
    ConsultationsComponent,
    PrescriptionsComponent,
    WorkingHoursComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
