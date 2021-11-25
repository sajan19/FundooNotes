import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  cards:any=Object;
 
  // @Input() childMessage: any;
  constructor(public dialog: MatDialog) {}
  // constructor() { }
// @Input (property) DisplayCardComponent.NotesArrayList:any
@Input() NotesArrayList:any
  ngOnInit(){

  }
openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateNotesComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}

  