import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../doctor-list/doctor-list.component";
import {Animal} from "../animal-list/animal-list.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public httpClient:HttpClient
  ) { }

  //DOCTORS API
  getAllDoctors(){
    return this.httpClient.get<Doctor[]>(`http://localhost:8080/doctors`)
  }

  deleteDoctorById(id : number){
    return this.httpClient.delete(`http://localhost:8080/doctors/${id}`)
  }

  updateDoctorById(id:number , doctor:Doctor){
    return this.httpClient.put(`http://localhost:8080/doctors/${id}`,doctor)
  }

  createDoctor(doctor:Doctor){
    console.log("API DOCTOR CREATE")
    return this.httpClient.post<Doctor>(`http://localhost:8080/doctor`,doctor)
  }

  retrieveDoctorById(id:number){
    return this.httpClient.get<Doctor>(`http://localhost:8080/doctor/${id}`)
  }

  // DOCTORS API
  // ANIMALS API
  getAllAnimals(){
    return this.httpClient.get<Animal[]>(`http://localhost:8080/animals`)
  }

  deleteAnimal(id:number){
    return this.httpClient.delete(`http://localhost:8080/animals/${id}`)
  }

  updateAnimal(id:number, animal:Animal){
    return this.httpClient.put(`http://localhost:8080/animals/${id}` , animal)
  }

  retrieveAnimalById(id:number){
    return this.httpClient.get<Animal>(`http://localhost:8080/animal-id/${id}`)
  }

  createAnimal(animal:Animal){
    return this.httpClient.post<Animal>(`http://localhost:8080/animal` , animal)
  }

 // ANIMALS API
 //USERS API


}
