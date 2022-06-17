import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    }
  }
  get name(){
    return this.data.name;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: { target: 'patient' | 'medic', name: string }) { }

  ngOnInit(): void {
  }

}
