import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
token:any;
  constructor(private httpService: HttpService) { }
  createNote(reqPayLoad: any) {
    this.token=localStorage.getItem('token')

    console.log("Data is in user service",reqPayLoad);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('notes/addNotes', reqPayLoad, true, options);
  }

  getAllNotesService(){
    this.token=localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    };
    return this.httpService.getService('notes/getNotesList',true, options);
  }
  
}
