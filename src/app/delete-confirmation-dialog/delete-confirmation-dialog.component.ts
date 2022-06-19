import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MedicService } from '../services/medic/medic.service';
import { PatientService } from '../services/patient/patient.service';
import { SpecialtyService } from '../specialty.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  get target(){
    switch(this.data.target){
      case 'medic': return 'médico(a)';
      case 'patient': return 'paciente';
      case 'specialty': return 'especialidade';
    }
  }
  get name(){
    return this.data.name;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { target: 'patient' | 'medic' | 'specialty', name: string, id: number },
    private patientService: PatientService,
    private medicService: MedicService,
    private specialtyService: SpecialtyService,
    private router: Router,
    private utilService: UtilService) { }

  ngOnInit(): void {
  }

  delete(){
    switch (this.data.target) {
      case 'patient':
        this.patientService.delete(this.data.id).subscribe(affectedRowsAmount => {
          if(parseInt(affectedRowsAmount) === 0){
            alert('Nothing changed...');
          }
          this.utilService.reloadCurrentComponent(this.router);
        });
        break;

      case 'medic':
        this.medicService.delete(this.data.id).subscribe(affectedRowsAmount => {
          if(parseInt(affectedRowsAmount) === 0)
            alert('Nothing changed...');
          this.utilService.reloadCurrentComponent(this.router);
        });
        break;

      case 'specialty':
        this.specialtyService.delete(this.data.id).subscribe(affectedRowsAmount => {
          if(parseInt(affectedRowsAmount) === 0)
            alert('Nothing changed...');
          this.utilService.reloadCurrentComponent(this.router);
        });
        break;
    }

  }

}
