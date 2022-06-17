import { Component, OnInit } from '@angular/core';
import { Specialty } from '../models/Specialty';
import { SpecialtyService } from '../specialty.service';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss']
})
export class SpecialtyComponent implements OnInit {
  specialties: Specialty[];

  constructor(private specialtyService: SpecialtyService) {
    this.specialties = specialtyService.getSpecialties();
  }

  ngOnInit(): void {
  }

  addNewSpecialty(){

  }

}
