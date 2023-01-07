import { Component } from '@angular/core';
import {DataService} from "../service/data.service";
export class Doctor{
  constructor(
    public id:number,
    public firstName:string,
    public lastName:string,
    public speciality:string,
    public age : number,
    public yearsOfExperience:number){
  }

}

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {

  doctors : Doctor[] | any;

  constructor(
    public service:DataService,

  ) {
  }
  ngOnInit(){
    this.refreshPage()
  }

  refreshPage(){
    this.service.getAllDoctors().subscribe(
      response=>{
        console.log(response);
        this.doctors = response
      },
      error => {
        console.log("An error has Occured in doctor refresh page")
      }
    )
  }

  deleteDoctor(id : number) {

  }

  updateDoctor(id : number) {

  }

  createDoctor() {

  }
}
