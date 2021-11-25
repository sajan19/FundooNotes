import { Component, OnInit } from '@angular/core';
// import { AnyRecord } from 'dns';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {

  note: any;
  title: any;
  description: any;


  constructor(
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    this.title=data.title
    this.description=data.description
    
  }


  ngOnInit(): void {
  }

}
