
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { __values } from 'tslib';
import { AuthService } from '../auth.service';
export interface User{
  name :string;
  lastName: string;
  password:string;
  email: string;
  passwordRepeat:string;
  phoneNumber:number;
  employmentField:string;
}



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  user!: FormGroup;
  ngOnInit() {
    this.user =  new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(""),
      email : new FormControl(""),
      password: new FormControl(""),
      passwordRepeat: new FormControl(""),
      phoneNumber: new FormControl(0),
      employmentField: new FormControl("")
    });
  }

  


  constructor(private http:HttpClient,private authService: AuthService){}
  subtmit(user1: any){
    
    var body1 = {name:"",surname:"",email:"",password:"",phone:0,employmentField:""}
    body1.name =  this.user.get('name')?.value;
    body1.surname = this.user.get('lastName')?.value;
    body1.email = this.user.get('email')?.value;
    body1.password = this.user.get('password')?.value;
    body1.phone = this.user.get('phoneNumber')?.value;
    body1.employmentField = this.user.get('employmentField')?.value;

    let response = this.http.post<any>("api/v1/rest/user", body1)
    response.subscribe(data=> console.log(data)
    )
    

    var body2 = {username:"", password:""}
    body2.username = this.user.get('email')?.value;
    body2.password = this.user.get('password')?.value;
    let response2 = this.http.post<any>("http://localhost:8088/authenticate/register", body2)
    response2.subscribe(data=> console.log(data));
    
    if(response && response2){
      this.login();
    }
  }
  login(){
    sessionStorage.setItem('isRegisteredIn', 'false');
    sessionStorage.setItem('isLoggedIn', 'false');
  }
}
