import { Component, Output , EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  token:string;
  username : string;
  password : string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = '';
    this.username = '';
    this.password = '';
  }

  ngOnInit() {}
  LoginUser() {
    if(this.username =="" && this.password ==""){
      alert("Please enter username and password");
    }else if(this.username !== "" && this.password !==""){

      var body = {username:"", password:""};
      body.username = this.username;
      body.password = this.password;

      let response =this.http.post<any>('http://localhost:8088/authenticate/auth',body);
      response.subscribe((data)=>this.token = data.token
      );
      sessionStorage.setItem('token', this.token);
      console.log(this.token);
      
      if(this.token != ''){
        this.login();
        sessionStorage.setItem('userName',this.username);
      }
    }
  }
  login() {
    this.authService.login();
  }
  RegisterUser(){
    this.authService.register();
  }
}
