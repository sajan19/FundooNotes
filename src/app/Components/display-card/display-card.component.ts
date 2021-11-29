import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  cards:any=Object;
  sentmsg:any;
  
  constructor(public dialog: MatDialog) {}
  // constructor() { }
// @Input (property) DisplayCardComponent.NotesArrayList:any

@Input() NotesArrayList:any
@Output() displaytogetallnotes = new EventEmitter<string>();
  ngOnInit(){

  }

openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateNotesComponent,{
      data: note   
    }
    );

  dialogRef.afterClosed().subscribe(result => {
    this.displaytogetallnotes.emit(this.sentmsg)
    console.log(`Dialog result: ${result}`);

  });
}

    recieveFromIconsToDisplayCard($event: any) {
    console.log("recievedindisplay",$event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }
}

  
