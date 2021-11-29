import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/noteService/note-service.service';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isTrashComponent: boolean = false;
  isArchive: boolean = false;
  @Input() noteCard: any
  note: any
  @Output() iconstodisplay = new EventEmitter<string>();
  colorarray = ['#F28B82', '#FBBC05', '#FFF475', '#CCFF90', '#A7FFEB','#CBF0F8','#AECBFA','#D7AEFB','#FDCFE8','#E6C9A8','#E8EAED'];
  constructor(private NoteServiceService: NoteServiceService, private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let com = this.activatedRoute.snapshot.component;

    if (com == TrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }

    if (com == ArchiveComponent) {
      this.isArchive = true;
      console.log(this.isArchive);
    }

  }
  deleteNoteForever() {
    console.log("Note is deleted permenantly", this.noteCard);

    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.NoteServiceService.deleteNoteService(req).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open('Note is Deleted Permanently!!', '', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(response)

    }, error => {
      console.log(error);
    })
  }
  trashNote() {
    console.log("Note is trash", this.noteCard);

    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.NoteServiceService.trashNoteService(req).subscribe((response: any) => {
      console.log("Succefully deleted", response);
      this.snackBar.open('Note is Deleted Successfully!!', '', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(response)

    }, error => {
      console.log(error);
    })
  }
  archiveNote() {
    console.log("Note is archive", this.noteCard);
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.NoteServiceService.archivedService(req).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open('Note is Archived Successfully!!', '', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(response)
    }, error => {
      console.log(error);
    })
  }

  onUnArchive() {
    console.log("Note is archive", this.noteCard);
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: false,
    }
    this.NoteServiceService.archivedService(req).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open('Note is Unarchived Successfully!!', '', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      this.iconstodisplay.emit(response)
    }, error => {
      console.log(error);
    })
  }


  onRestore() {
    let req = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.NoteServiceService.trashNoteService(req).subscribe((res: any) => {
      console.log((res.data));
      this.snackBar.open('Note is Restored Successfully!!', '', {
        horizontalPosition: 'start',
        duration: 2000,
      })
      // this._snackBar.open("Note Restored", 'Undo', {
      //   horizontalPosition: 'start',
      //   duration: 2000,
      // })
      this.iconstodisplay.emit(res)
    }, error => {
      console.log(error);

    })
  }

  changecolor(data: any) {
    let req = {
      noteIdList: [this.noteCard.id],
      color: data
    }

    console.log("data transferring",req);
    
    this.NoteServiceService.changecolorservice(req).subscribe((res: any) => {
      console.log("in icon");
      console.log(res.data);
      this.iconstodisplay.emit(res)

    })
  }

}

