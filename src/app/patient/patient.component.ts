import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/Patient';
import { PatientDialogComponent } from '../patient-dialog/patient-dialog.component';
import { PatientService } from '../services/patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [];
  nameQueryParam?: string;

  constructor(
    private dialog: MatDialog,
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.nameQueryParam = params['name'];
    })

    this.patientService.getAll(this.nameQueryParam).subscribe({
      next: data => {
        this.patients = data;
      },
      error: error => {
        console.error('FATAL ERROR...\n');
        console.error(error);
      }
    });
  }

  addNewPatient(){
    this.dialog.open(PatientDialogComponent, { width: '500px', position: { top: '6%'}, data: { mode: 'new' }, disableClose: true })
  }

  setNewData(data: Patient[]){
    this.patients = data;
  }

}
