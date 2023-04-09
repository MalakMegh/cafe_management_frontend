import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../servcies/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: any = FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private router:Router, 
    private userService:UserService) {

    }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:  [null, [Validators.required]],
        password: [null, [Validators.required]],
      })
    }  

  handleSubmit() {      
      var formData = this.loginForm.value;
      var data  = {
        email : formData.email,
        password : formData.password,
      }
      this.userService.login(data);
    }
}
