import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';

@Component({
  selector: 'app-get-reminders-note',
  templateUrl: './get-reminders-note.component.html',
  styleUrls: ['./get-reminders-note.component.scss']
})
export class GetRemindersNoteComponent implements OnInit {
  NotesList:any
  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
    this.getReminders()
  }
  getReminders(){
    console.log(" get Reminders Calling");
    this.noteService.getReminderNotes().subscribe((result:any) =>{
      console.log(result.data);
      // console.log(result.data.data);
      this.NotesList=result.data.data  
      // this.NotesList=result.data  
    },error=>{
      console.log(error);
    }) 
  }
 
}
