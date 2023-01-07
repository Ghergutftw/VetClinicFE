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

  getAllDoctors(){
    return this.httpClient.get<Doctor[]>(`http://localhost:8080/doctors`)
  }

  getAllAnimals(){
    return this.httpClient.get<Animal[]>(`http://localhost:8080/animals`)
  }
}
