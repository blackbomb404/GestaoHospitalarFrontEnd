import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Patient } from '../models/Patient';
import { MedicService } from '../services/medic/medic.service';
import { PatientService } from '../services/patient/patient.service';
import { SpecialtyService } from '../specialty.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchValue: string = '';
  @Input() placeholder: string = 'Type a message here...'
  @Input() target!: 'patient' | 'medic' | 'specialty';
  @Output() onDataFetched: EventEmitter<any> = new EventEmitter();

  constructor(
    private patientService: PatientService,
    private medicService: MedicService,
    private specialtyService: SpecialtyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    switch (this.target) {
      case 'patient':
        const patientName = this.searchValue.trim();
        this.patientService.getAll(patientName).subscribe({
          next: data => this.onDataFetched.emit(data)
        });
        break;

      case 'medic':
        const medicName = this.searchValue.trim();
        this.medicService.getAll(medicName).subscribe({
          next: data => this.onDataFetched.emit(data)
        });
        break;

      case 'specialty':
        const specialtyName = this.searchValue.trim();
        this.specialtyService.getAll(specialtyName).subscribe({
          next: data => this.onDataFetched.emit(data)
        })
        break;

      default:
        break;
    }

  }

}
