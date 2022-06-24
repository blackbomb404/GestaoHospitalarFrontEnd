import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Patient } from '../models/Patient';
import { PatientService } from '../services/patient/patient.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.mode === 'update' ? this.data.model.id : null),
    firstname: new FormControl(this.data.mode === 'update' ? this.data.model.firstname : '', Validators.required),
    lastname: new FormControl(this.data.mode === 'update' ? this.data.model.lastname : '', Validators.required),
    birthdate: new FormControl(this.data.mode === 'update' ? this.data.model.birthdate : '', Validators.required)
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'new' | 'update', model: Patient },
    private patientService: PatientService,
    private router: Router,
    private utilService: UtilService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const patient = this.form.value as Patient;

    switch(this.data.mode){

      case 'new':
        this.patientService.add(patient).subscribe({
          next: affectedRowsAmount => {
            if(parseInt(affectedRowsAmount) > 0){
              this.utilService.reloadCurrentComponent(this.router);
            }

          },
          error: (error: HttpErrorResponse) => {
            switch(error.status){
              case 401:
                // console.log(error.error);
                const message = JSON.parse(error.error).message;
                alert(message);
                break;
            }
          }
        });
        break;

      case 'update':
        const id: number = this.form.get('id')?.value;
        this.patientService.update(patient, id).subscribe({
          next: affectedRowsAmount => {
            if(parseInt(affectedRowsAmount) > 0){
              this.utilService.reloadCurrentComponent(this.router);
            }

          },
          error: (error: HttpErrorResponse) => {
            switch(error.status){
              case 401:
                // console.log(error.error);
                const message = JSON.parse(error.error).message;
                alert(message);
                break;
            }
          }
        })
        break;
    }
  }

}
