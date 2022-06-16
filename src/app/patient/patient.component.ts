import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  searchValue: string = '';

  patients: Patient[] = [
    { id: 1, firstname: 'john', lastname: 'doe', birthdate: new Date('2012-06-10') },
    { id: 2, firstname: 'lhana', lastname: 'doe', birthdate: new Date('2002-10-16') },
    { id: 3, firstname: 'mark', lastname: 'addam', birthdate: new Date('1996-11-24') }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  calculateAge(birthdate: Date) : number {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate()))
    {
        age--;
    }
    return age;
  }

  onKeyPress(event: KeyboardEvent){
    if(event.key === 'Enter'){
      alert(this.searchValue);
    }
  }

  edit(id: number){
    const patient = this.patients.find(patient => patient.id === id);
    this.dialog.open(EditDialogComponent, { width: '500px', position: {  top: '128px' }, data: patient });
  }

  onSubmit(){

  }

}
