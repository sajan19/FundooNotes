import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  cards:any=Object;
  // dialog: any;
  note:any
 
  // @Input() childMessage: any;
  // constructor() { }
// @Input (property) DisplayCardComponent.NotesArrayList:any
@Input() NotesArrayList:any
  ngOnInit(){
  

  // this.cards = [
  // this.NotesArrayList = [
  //   {title:"Welcome",
  //   description: "ipsum dolor, sit amet consectetur adipisicing elit. Quis provident esse et, animi nulla, recusandae"},
  //   {title:"Notebook",
  //   description: "consectetur elit. Quis provident esse et, animi um qun"},
  //   {title:"Browser",
  //   description: "lor, sit amet consectetur adipisicing elit. Quis provident esse et, animi nulla, recusandae praesentium"},
  //   {title:"Google",
  //   description: "ipsum dolor, sit cing elit. Quis provident esse et, animi nulla, recusandae praesentium quway Station"},
  //   {title:"NotesApp",
  //   description: "Sipsum dolor, sit a recusandae praesentium quStation"},
  //   {title:"Cricket",
  //   description: "Sipsum dolor, sit a recusandae praesentium quStation"},
  //   {title:"Angular",
  //   description: "Sipsum dolor, sit a recusandae praesentium quStation"},
  //   {title:"Notes",
  //   description: "Sipsum dolor, sit a recusandae praesentium quStation"},
  // ]

}

// openDialog(note:any){
//   const dialogRef = this.dialog.open(UpdateNotesComponent,{
//     width:"600px",
//     data:note
//   });
//   dialogRef.afterClosed().subscribe((result:any) => {
//     console.log('Dialog result: $(result)');
    
//   })
// }

constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '600px',
      data: this.note
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('Dialog result: $(result)');
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}