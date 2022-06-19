import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialty } from './models/Specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(private http: HttpClient) { }

  public add(specialty: { name: string }){
    return this.http.post('http://localhost:8080/specialty', specialty, { responseType: 'text' });
  }

  public getAll(name?: string){
    if(name == undefined)
      return this.http.get<Specialty[]>('http://localhost:8080/specialty');
    return this.http.get<Specialty[]>('http://localhost:8080/specialty', { params: { name } });
  }

  public update(specialty: { name: string }, id: number){
    return this.http.put('http://localhost:8080/specialty/' + id, specialty, { responseType: 'text' });
  }

  public delete(id: number) {
    return this.http.delete('http://localhost:8080/specialty/' + id, { responseType: 'text'});
  }


}
