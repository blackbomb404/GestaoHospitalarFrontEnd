import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Specialty } from '../models/Specialty';
import { SpecialtyDialogComponent } from '../specialty-dialog/specialty-dialog.component';
import { SpecialtyService } from '../specialty.service';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss']
})
export class SpecialtyComponent implements OnInit {
  specialties: Specialty[] = [];

  constructor(
    private specialtyService: SpecialtyService,
    private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
      this.specialtyService.getAll().subscribe({
        next: data => this.specialties = data,
        error: error => {
          console.error('FATAL ERROR');
          console.error(error);
        }
      });
  }

  addNewSpecialty(){
    this.dialog.open(SpecialtyDialogComponent, { width: '500px', position: { top: '6%' }, data: { mode: 'new' }, disableClose: true });
  }

  setNewData(data: Specialty[]){
    this.specialties = data;
  }

  edit(specialtyId: number){
    const specialty = this.specialties.find(specialty => specialty.id === specialtyId);
    this.dialog.open(SpecialtyDialogComponent, { width: '500px', position: { top: '6%' }, data: { mode: 'update', model: specialty }, disableClose: true });
  }

  delete(specialtyId: number){
    const specialty = this.specialties.find(specialty => specialty.id === specialtyId);
    this.dialog.open(DeleteConfirmationDialogComponent, { position: { top: '6%' }, data: { target: 'specialty', name: specialty?.name, id: specialty?.id } });
  }

}
