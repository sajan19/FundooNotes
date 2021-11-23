import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _snackBar:MatSnackBar, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

    console.log(this.loginForm.value);
    if(this.loginForm.valid){

      let reqData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }

      console.log("Data is in login",reqData);
      this.userService.login(reqData).subscribe((response:any)=>{
      console.log(response)
      localStorage.setItem('token',response.id)
      this._snackBar.open('Success!! Valid Data', '',{
        duration:2000,
      })
      },error =>{
        console.log(error); 
        this._snackBar.open('Please insert valid data', '',{
          duration:2000,
        })
      })
      console.log("It is a valid data") 
    }
    else{
      console.log("Please insert valid data");
    }
    if (this.loginForm.invalid) {
      return;
    }
  }
}