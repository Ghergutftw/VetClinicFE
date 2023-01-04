import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: '**' , component:ErrorComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }