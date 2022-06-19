import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Specialty } from '../models/Specialty';
import { SpecialtyService } from '../specialty.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-specialty-dialog',
  templateUrl: './specialty-dialog.component.html',
  styleUrls: ['./specialty-dialog.component.scss']
})
export class SpecialtyDialogComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(this.data.mode === 'update' ? this.data.model.id : null),
    name: new FormControl(this.data.mode === 'update' ? this.data.model.name: '', Validators.required)
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'new' | 'update', model: Specialty },
    private specialtyService: SpecialtyService,
    private utilService: UtilService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    switch(this.data.mode){
      case 'new':
        this.specialtyService.add(this.form.value).subscribe({
          next: affectedRowsAmount => {
            if(parseInt(affectedRowsAmount) > 0)
              this.utilService.reloadCurrentComponent(this.router);
            else
              alert('Nothing changed...');
          },
          error: error => {
            console.error('FATAL ERROR');
            console.error(error);
          }
        });
        break;

      case 'update':
        const id: number = this.form.get('id')?.value;
        this.specialtyService.update(this.form.value, id).subscribe({
          next: affectedRowsAmount => {
            if(parseInt(affectedRowsAmount) > 0)
              this.utilService.reloadCurrentComponent(this.router);
            else
              alert('Nothing changed...');
          },
          error: error => {
            console.error('FATAL ERROR');
            console.error(error);
          }
        });
        break;
    }
  }

}
