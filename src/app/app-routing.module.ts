import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {LogoutComponent} from "./logout/logout.component";
import {DoctorListComponent} from "./doctor-list/doctor-list.component";
import {AnimalListComponent} from "./animal-list/animal-list.component";
import {ConsultationsComponent} from "./consultations/consultations.component";
import {PrescriptionsComponent} from "./prescriptions/prescriptions.component";
import {WorkingHoursComponent} from "./working-hours/working-hours.component";
import {RouterGuardService} from "./service/route-guard.service/router-guard.service";

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'welcome',component:WelcomeComponent , canActivate:[RouterGuardService]},
  {path: 'animals',component:AnimalListComponent , canActivate:[RouterGuardService]},
  {path: 'doctor',component:DoctorListComponent , canActivate:[RouterGuardService]},
  {path: 'consultations',component:ConsultationsComponent , canActivate:[RouterGuardService]},
  {path: 'prescriptions',component:PrescriptionsComponent , canActivate:[RouterGuardService]},
  {path: 'workingHours',component:WorkingHoursComponent , canActivate:[RouterGuardService]},
  {path: 'login',component:LoginComponent},
  {path: 'logout',component:LogoutComponent , canActivate:[RouterGuardService]},
  {path: '**', component:ErrorComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
