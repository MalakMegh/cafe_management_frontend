import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../servcies/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: any = FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private router:Router, 
    private userService:UserService) {

    }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:  [null, [Validators.required]],
      email:  [null, [Validators.required]],
      phoneNumber:  [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    })
  }

  validateSubmit() {
    if(this.registerForm.controls['password'].value != this.registerForm.controls['confirmPassword'].value) {
      return true;
    }else {
        return false;
      }  
  }

  handleSubmit() {    
    var formData = this.registerForm.value;
    var data  = {
      name : formData.name,
      email : formData.email,
      password : formData.password,
      phoneNumber : formData.phoneNumber,
      confirmPassword: formData.confirmPassword
    }
    this.userService.register(data);
  }
}
