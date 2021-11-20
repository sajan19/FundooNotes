import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm !: FormGroup;
  submitted = false;
  token: any;

constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

ngOnInit() {
  this.resetPasswordForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    cpassword: ['', [Validators.required]],
  });

  this.token = this.activatedRoute.snapshot.paramMap.get('token');
  console.log(this.token);
  
}

onSubmit(){
  console.log(this.resetPasswordForm.value);

  if(this.resetPasswordForm.valid){
    let reqData={
      newPassword:this.resetPasswordForm.value.password,
    }

    console.log("Data is in reset-password",reqData);
    this.userService.resetPasswordForm(reqData,this.token).subscribe((response:any)=>
    console.log(response)
    )
    console.log("Success!! Password has being updated successfully.");
    this.snackBar.open("Success!! Password has being updated successfully.", " ", {duration:2000});

   
  }else{
    
    console.log("Error!! Password updated failed.");
    this.snackBar.open("Error!! Password updated failed.", " ", {duration:2000});
  }
}

}