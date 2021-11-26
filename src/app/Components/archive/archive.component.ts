import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  // note:any;
  id:any;
  @Input() noteCard: any
  NotesList:any
  constructor(private NoteServiceService: NoteServiceService) { }

  ngOnInit(): void {
    this.archiveNote();
  }
  archiveNote(){
    
    // console.log("Note is archive",this.noteCard);
    // let req = {
    //   noteIdList: [this.noteCard.id],
    //   isArchived: true,
    // }
    this.NoteServiceService.getArchiveNoteService().subscribe((response: any) =>{
      console.log("Getting note Archive",response);
      
      this.NotesList = response.data.data.reverse()
      this.NotesList=this.NotesList.filter((noteData:any)=>{
        return noteData.isDeleted === true;
      // this.iconstodisplay.emit(response)
      })
    },error =>{
      console.log(error); 
    })
   }

   receiveMessageFromDeleteNote($event: any) {
    console.log("Notes get deleted and AutoRefresh",$event);
    this.archiveNote()
   }
  }
