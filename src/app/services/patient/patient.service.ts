import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient
  ) { }

  public add(patient: Patient){
    return this.http.post('http://localhost:8080/patient', patient, { responseType: 'text' });
  }

  public getAll(firstname?: string){
    if(firstname == undefined)
      return this.http.get<Patient[]>('http://localhost:8080/patient');
    return this.http.get<Patient[]>('http://localhost:8080/patient', { params: { firstname } });
  }

  public update(patient: Patient, id: number){
    return this.http.put('http://localhost:8080/patient/' + id, patient, { responseType: 'text' });
  }

  public delete(id: number){
    return this.http.delete('http://localhost:8080/patient/' + id, { responseType: 'text' });
  }


}
