import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedicDialogComponent } from '../medic-dialog/medic-dialog.component';
import { Medic } from '../models/Medic';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.scss']
})
export class MedicComponent implements OnInit {
  medics: Medic[] = [
    { id: 1, firstname: 'eric', lastname: 'batt', specialty: { id: 1, value: 'Derma'} },
    { id: 2, firstname: 'rose', lastname: 'wills', specialty: { id: 2, value: 'Neuro'} },
    { id: 3, firstname: 'joseph', lastname: 'noah', specialty: { id: 3, value: 'Cardio'} },
    { id: 4, firstname: 'jackson', lastname: 'phillip', specialty: {id: 4, value: 'Uro'} }
  ]

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addNewMedic(){
    this.dialog.open(MedicDialogComponent, { width: '500px', position: { top: '6%'}, data: { mode: 'add' }, disableClose: true })
  }

}
