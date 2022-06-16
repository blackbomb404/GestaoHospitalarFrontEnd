import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstname: new FormControl(this.data.firstname, Validators.required),
    lastname: new FormControl(this.data.lastname, Validators.required),
    birthdate: new FormControl(this.data.birthdate, Validators.required)
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: Patient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
