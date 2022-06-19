import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientDialogComponent } from '../patient-dialog/patient-dialog.component';
import { Patient } from '../models/Patient';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { PatientService } from '../services/patient/patient.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() patient!: Patient;

  constructor(
    private dialog: MatDialog,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
  }

  calculateAge(birthdateStr: string) : number {
    const birthdate = new Date(birthdateStr);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate()))
    {
        age--;
    }
    return age;
  }

  edit(){
    this.dialog.open(PatientDialogComponent, { width: '500px', position: {  top: '6%' }, data: { mode: 'update', model: this.patient}, disableClose: true });
  }

  delete(){
    const fullname = `${this.patient.firstname} ${this.patient.lastname}`;
    this.dialog.open(DeleteConfirmationDialogComponent, { position: { top: '6%' }, data: { target: 'patient', name: fullname, id: this.patient.id } });
  }

}
