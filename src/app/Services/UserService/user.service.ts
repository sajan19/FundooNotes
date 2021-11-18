import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registration(reqPayLoad: any) {
    console.log("Data is in user service",reqPayLoad);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('user/userSignUp', reqPayLoad, false, options);

  }
}


