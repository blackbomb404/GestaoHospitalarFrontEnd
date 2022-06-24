import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medic } from 'src/app/models/Medic';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  constructor(private http: HttpClient) { }

  public add(medic: { firstname: string, lastname: string, specialtyId: number }){
    // alert('sending the request...');
    return this.http.post('http://localhost:8080/medic', medic, { responseType: 'text' });
  }

  public getAll(firstname?: string){
    if(firstname == undefined)
      return this.http.get<Medic[]>('http://localhost:8080/medic');
    return this.http.get<Medic[]>('http://localhost:8080/medic', { params: { firstname } });
  }

  public update(medic: { firstname: string, lastname: string, specialtyId: number }, id: number){
    return this.http.put('http://localhost:8080/medic/' + id, medic, { responseType: 'text' });
  }

  public delete(id: number) {
    return this.http.delete('http://localhost:8080/medic/' + id, { responseType: 'text' });
  }
}
