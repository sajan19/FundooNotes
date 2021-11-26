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
    
    console.log("Note is archive",this.noteCard);
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.NoteServiceService.getArchiveNoteService(req).subscribe((response: any) =>{
      console.log("Getting note Archive",response);
      this.NotesList=response.data.data;
      // this.iconstodisplay.emit(response)
    },error =>{
      console.log(error); 
    })
   }

}
