import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MedicDialogComponent } from '../medic-dialog/medic-dialog.component';
import { Medic } from '../models/Medic';

@Component({
  selector: 'app-medic-card',
  templateUrl: './medic-card.component.html',
  styleUrls: ['./medic-card.component.scss']
})
export class MedicCardComponent implements OnInit {
  @Input() medic!: Medic;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  edit(){
    this.dialog.open(MedicDialogComponent, { width: '500px', position: {  top: '6%' }, data: { mode: 'update', model: this.medic }, disableClose: true });
  }

  delete(){
    const fullname = `${this.medic.firstname}  ${this.medic.lastname}`;
    this.dialog.open(DeleteConfirmationDialogComponent, { position: { top: '6%' }, data: { target: 'medic', name: fullname } });
  }

}
