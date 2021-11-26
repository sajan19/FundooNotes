import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';
@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  note:any;
  title: any;
  id:any;
  description:any;
  // constructor() {}
  constructor(private NoteServiceService:NoteServiceService,
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log("Data is in update-note",data);
      this.title = data.title;
      this.description = data.description;
      this.id = data.id;
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
    ngOnInit(): void {
    
    }
    onUpdate() {
      this.id
      let data = {
        title: this.title,
        description: this.description,
        noteId: this.id
      }
      this.NoteServiceService.updateNoteService(data).subscribe((result:any) => {
        console.log(result);
        this.title = ''
        this.description = ''
        this.dialogRef.close(result)
      })
    }

  

}
