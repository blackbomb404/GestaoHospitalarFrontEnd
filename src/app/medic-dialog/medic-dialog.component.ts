import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Medic } from '../models/Medic';
import { Specialty } from '../models/Specialty';
import { MedicService } from '../services/medic/medic.service';
import { SpecialtyService } from '../specialty.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-medic-dialog',
  templateUrl: './medic-dialog.component.html',
  styleUrls: ['./medic-dialog.component.scss']
})
export class MedicDialogComponent implements OnInit {
  model: Medic = this.data.model;

  form = new FormGroup({
    id: new FormControl(this.data.mode === 'update' ? this.model.id : null),
    firstname: new FormControl(this.data.mode === 'update' ? this.model.firstname : '', Validators.required),
    lastname: new FormControl(this.data.mode === 'update' ? this.model.lastname : '', Validators.required),
    specialtyId: new FormControl(this.data.mode === 'update' ? this.model.specialty.id : '', Validators.required)
  })
  specialties: Specialty[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'new' | 'update', model: Medic},
    private specialtyService: SpecialtyService,
    private medicService: MedicService,
    private utilService: UtilService,
    private router: Router
    ) {

    }

  ngOnInit(): void {
    this.specialtyService.getAll().subscribe({
      next: data => {
        this.specialties = data;
      },
      error: error => {
        console.error('FATAL ERROR');
        console.error(error);
      }
    });

  }

  onSubmit(){
    console.log('submitted');
    // alert(this.data.mode);

    switch(this.data.mode){
      case 'new':
        this.medicService.add(this.form.value).subscribe({
          next: affectedRowsAmount => {
            if(parseInt(affectedRowsAmount) > 0)
              this.utilService.reloadCurrentComponent(this.router);
            else
              alert('Nothing changed...');
          }
        });
        break;

      case 'update':
        const id: number = this.form.get('id')?.value;
        this.medicService.update(this.form.value, id).subscribe({
          next: affectedRowsAmount => {
            if(parseInt(affectedRowsAmount) > 0)
              this.utilService.reloadCurrentComponent(this.router);
            else
              alert('Nothing changed...');
          }
        });
        break;
    }

  }

}
