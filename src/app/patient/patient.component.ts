import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Patient } from '../models/Patient';
import { PatientDialogComponent } from '../patient-dialog/patient-dialog.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [
    { id: 1, firstname: 'john', lastname: 'doe', birthdate: new Date('2012-06-10') },
    { id: 2, firstname: 'lhana', lastname: 'doe', birthdate: new Date('2002-10-16') },
    { id: 3, firstname: 'mark', lastname: 'addam', birthdate: new Date('1996-11-24') },
    { id: 4, firstname: 'nathan', lastname: 'boz', birthdate: new Date('1995-11-26') }
  ]

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addNewPatient(){
    this.dialog.open(PatientDialogComponent, { width: '500px', position: { top: '6%'}, data: { mode: 'new' }, disableClose: true })
  }

}
