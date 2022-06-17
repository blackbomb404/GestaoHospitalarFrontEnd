import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent implements OnInit {
  model: Patient = this.data.model;

  form: FormGroup = new FormGroup({
    firstname: new FormControl(this.data.mode === 'update' ? this.model.firstname : '', Validators.required),
    lastname: new FormControl(this.data.mode === 'update' ? this.model.lastname : '', Validators.required),
    birthdate: new FormControl(this.data.mode === 'update' ? this.model.birthdate : '', Validators.required)
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: { mode: string, model: Patient}) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
