import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      service: 'advance'
    });
  }
  get f() { return this.forgotPasswordForm.controls; }

onSubmit(){
  this.submitted = true;

  console.log(this.forgotPasswordForm.value);
  if(this.forgotPasswordForm.valid){

    let reqData={
      email:this.forgotPasswordForm.value.email,
      service: this.forgotPasswordForm.value.service
    }

    console.log("Data is in forgot-password",reqData);
    this.userService.forgotPasswordForm(reqData).subscribe((response:any)=>
    console.log(response)
    )
    console.log("It is a valid data")
   
  }else{
    console.log("please insert valid data");
  }

  if (this.forgotPasswordForm.invalid) {
    return;
  }

}
}
