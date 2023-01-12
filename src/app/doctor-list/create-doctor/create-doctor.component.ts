import { Component } from '@angular/core';
import {DataService} from "../../service/data.service";
import {Doctor} from "../doctor-list.component";
import {Router} from "@angular/router";
import {User} from "../../users/users.component";

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent {
  createdDoctor!: Doctor

  user!: User

  constructor(
    private service : DataService,
    private router: Router
  ) {

  }

  ngOnInit(){
    this.user = new User("" , "")
    this.createdDoctor = new Doctor(0, "", "", "", 0, 0, this.user )
  }


  createDoctor(doctor : Doctor) {
    console.log(`Creating Doctor !`)
    this.createdDoctor.firstName = doctor.firstName
    this.createdDoctor.lastName = doctor.lastName
    this.createdDoctor.speciality = doctor.speciality
    this.createdDoctor.age = doctor.age
    this.createdDoctor.yearsOfExperience = doctor.yearsOfExperience
    this.createdDoctor.user.email = doctor.user.email;
    this.createdDoctor.user.password=doctor.user.password;
    this.service.createDoctor(this.createdDoctor).subscribe(response =>{
      console.log("DIN CREATE")
      console.log(this.createdDoctor)
      this.router.navigate(["/doctors-list"])
    })

  }
}
