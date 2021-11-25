import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any
  @Output() iconstodisplay = new EventEmitter<string>();
  constructor(private NoteServiceService: NoteServiceService) { }

  ngOnInit(): void {
  }
 deleteNote(){
    console.log("Note will be deleted",this.noteCard);
    
      let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.NoteServiceService.deleteNoteService(req).subscribe((response: any) =>{
      console.log(response);

      this.iconstodisplay.emit(response)
      
    },error =>{
      console.log(error); 
    })
   }
 }
 
