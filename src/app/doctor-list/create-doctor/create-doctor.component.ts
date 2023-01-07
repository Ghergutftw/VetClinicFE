import { Component } from '@angular/core';
import {DataService} from "../../service/data.service";
import {Doctor} from "../doctor-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent {
  doctor!: Doctor

  constructor(
    private service : DataService,
    private router: Router
  ) {

  }
  ngOnInit(){
    this.doctor = new Doctor(0, "", "", "", 0, 0, undefined, undefined, undefined)
  }


  createDoctor(doctor : Doctor) {
    console.log(`Creating Doctor !`)
    console.log(doctor.firstName)
    this.doctor.firstName = doctor.firstName
    this.doctor.lastName = doctor.lastName
    this.doctor.speciality = doctor.speciality
    this.doctor.age = doctor.age
    this.doctor.yearsOfExperience = doctor.yearsOfExperience
    this.doctor.email=doctor.email
    this.doctor.password=doctor.password
    this.service.createDoctor(this.doctor).subscribe(response =>{
      console.log(response)
      this.router.navigate(["/doctor"])
    })

  }
}
