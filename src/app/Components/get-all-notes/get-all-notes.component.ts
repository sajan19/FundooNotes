import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
NotesList=[]
  constructor(private noteService: NoteServiceService,
    private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getAllNotes()
    
    // this.dataService.receiveData.subscribe((reqData:any)=> {
    //   console.log(reqData);
    //   this.getAllNotes()
    // })
  }
  // datareceived(value){
  //   console.log(value);
  //   this.getAllNotes()
    
  // }
  getAllNotes(){
    console.log("Get all notes Calling");
    
    let notes = []
    // let item:any
    this.noteService.getAllNotesService().subscribe((response:any)=>{
      console.log('Message is present here',response);
      this.NotesList = response.data.data
      // notes = response.data.data
      
      this.NotesList.reverse()
      console.log("notelist", this.NotesList);
      
    },err => {
      console.log(err)    
    })
  }

}
