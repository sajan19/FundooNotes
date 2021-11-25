import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  note:any;
  title: any;
  description:any;
  // constructor() {}
  constructor(
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log("Data is in update-note",data);
      // this.title = data.title;
      // this.description = data.description;
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
    ngOnInit(): void {
    
    }

  

}
