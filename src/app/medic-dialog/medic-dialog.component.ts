import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Medic } from '../models/Medic';
import { Specialty } from '../models/Specialty';
import { SpecialtyService } from '../specialty.service';

@Component({
  selector: 'app-medic-dialog',
  templateUrl: './medic-dialog.component.html',
  styleUrls: ['./medic-dialog.component.scss']
})
export class MedicDialogComponent implements OnInit {
  model: Medic = this.data.model;

  form = new FormGroup({
    firstname: new FormControl(this.data.mode === 'update' ? this.model.firstname : '', Validators.required),
    lastname: new FormControl(this.data.mode === 'update' ? this.model.lastname : '', Validators.required),
    specialtyId: new FormControl(this.data.mode === 'update' ? this.model.specialty.id : '', Validators.required)
  })
  specialties: Specialty[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mode: string, model: Medic},
    private specialtyService: SpecialtyService
    ) {
      this.specialties = specialtyService.getSpecialties();
    }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
