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
  note: any;
 
  // @Input() childMessage: any;
  constructor(public dialog: MatDialog) {}
  // constructor() { }
// @Input (property) DisplayCardComponent.NotesArrayList:any

@Input() NotesArrayList:any
@Output() displaytogetallnotes = new EventEmitter<string>();
  ngOnInit(){

  }
openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateNotesComponent);{
      data: this.note
    }

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  receiveMessageFromDeleteNote($event: any) {
    console.log("recievedindisplay",$event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }
}

  
