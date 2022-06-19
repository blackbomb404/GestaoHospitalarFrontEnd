import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MedicDialogComponent } from '../medic-dialog/medic-dialog.component';
import { Medic } from '../models/Medic';
import { MedicService } from '../services/medic/medic.service';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.scss']
})
export class MedicComponent implements OnInit {
  medics: Medic[] = [];
  nameQueryParam?: string;

  constructor(
    private dialog: MatDialog,
    private medicService: MedicService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.nameQueryParam = params['name'];
    });

    this.medicService.getAll().subscribe({
      next: data => this.medics = data,
      error: error => {
        console.error('FATAL ERROR...\n');
        console.error(error);
      }
    });
  }

  addNewMedic(){
    this.dialog.open(MedicDialogComponent, { width: '500px', position: { top: '6%'}, data: { mode: 'new' }, disableClose: true })
  }

  setNewData(data: Medic[]){
    this.medics = data;
  }

}
