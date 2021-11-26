import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  parentMessage = "message from parent"
Noteslist:any
  constructor(private noteService: NoteServiceService) { }
  // Notelist: any;
  // NotesList:any;
  note: any;
  ngOnInit(): void {
    this.getAllNotes()
  }
    // this.dataService.receiveData.subscribe((reqData:any)=> {
    //   console.log(reqData);
    //   this.getAllNotes()
    // })
  // datareceived(value){
  //   console.log(value);
  //   this.getAllNotes()
    
  // }
  getAllNotes(){
    console.log("Get all notes Calling");
    // let item:any
    this.noteService.getAllNotesService().subscribe((response:any)=>{
      console.log('Message is present in getAllNotes',response);
      this.Noteslist = response.data.data.reverse()
      console.log("NoteList", this.Noteslist);
      // this.NotesList=this.NotesList.filter((noteData:any)=>{
      //   return noteData.isDeleted === true && noteData.isArchive === false;
      //  });
      // notes = response.data.data
      // this.NotesList.reverse()
      // console.log("NoteList", this.NotesList);
    },err => {
      console.log(err)    
    })
  }



  receiveMessage($event: any) {
    console.log("Notes get Added and AutoRefresh",$event);
    this.getAllNotes()
  }

  receiveMessageFromDeleteNote($event: any) {
    console.log("Notes get deleted and AutoRefresh",$event);
    this.getAllNotes()
  }

}
