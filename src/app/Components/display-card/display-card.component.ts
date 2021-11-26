import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  cards:any=Object;
  sentmsg:any;
  
 
  // @Input() childMessage: any;
  constructor(public dialog: MatDialog) {}
  // constructor() { }
// @Input (property) DisplayCardComponent.NotesArrayList:any

@Input() NotesArrayList:any
@Output() displaytogetallnotes = new EventEmitter<string>();
  ngOnInit(){

  }
  // const dialogRef = this.dialog.open(UpdateNotesComponent, {
  //   width: '250px',
  //   data: {name: this.name, animal: this.animal},
  // });
openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateNotesComponent,{
      data: note
      
    }
    );

  //   dialogRef.afterClosed().subscribe(result => {
  //     // console.log(`Dialog result: ${result}`);
  //   });
  // }
  dialogRef.afterClosed().subscribe(result => {
    this.displaytogetallnotes.emit(this.sentmsg)
    console.log(`Dialog result: ${result}`);

  });
}

  receiveMessageFromDeleteNote($event: any) {
    console.log("recievedindisplay",$event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }
}

  
