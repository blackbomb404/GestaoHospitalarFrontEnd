import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor() { }

  getSpecialties(){
    return [
      { id: 1, value:'Derma' },
      { id: 2, value:'Neuro' },
      { id: 3, value: 'Cardio' },
      { id: 4, value: 'Uro' }
    ];
  }
}
