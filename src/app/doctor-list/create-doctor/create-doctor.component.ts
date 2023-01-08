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
  createdDoctor!: Doctor

  constructor(
    private service : DataService,
    private router: Router
  ) {

  }
  ngOnInit(){
    this.createdDoctor = new Doctor(0, "", "", "", 0, 0, undefined, undefined, undefined)
  }


  createDoctor(doctor : Doctor) {
    console.log(`Creating Doctor !`)

    this.createdDoctor.firstName = doctor.firstName
    this.createdDoctor.lastName = doctor.lastName
    this.createdDoctor.speciality = doctor.speciality
    this.createdDoctor.age = doctor.age
    this.createdDoctor.yearsOfExperience = doctor.yearsOfExperience
    this.createdDoctor.email=doctor.email
    this.createdDoctor.password=doctor.password
    this.service.createDoctor(this.createdDoctor).subscribe(response =>{
      console.log(response)
      this.router.navigate(["/doctors-list"])
    })

  }
}
