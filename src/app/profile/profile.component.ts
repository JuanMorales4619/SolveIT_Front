import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import {HttpClient} from '@angular/common/http'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public idUser:number = 0; 
  public listPostings!: any[]; 
  public userName!:String;
  constructor(private http:HttpClient, private authService: AuthService){}

  product: any;
  user : any;
  ngOnInit(): void {
    this.initData();
  }

  async initData(){
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer '+token}
    const userName = sessionStorage.getItem('userName');
    let response = this.http.get<any>('api/v1/rest/user/'+userName,{headers});
    response.subscribe((data)=>this.user = data.data[0]);


    let response2 = this.http.get<any>('api/v1/rest/publication/user/'+userName,{headers});
    response2.subscribe((data)=>this.product = data.data);
  }

  async deleteAccount(){}

  async logOut(){
    sessionStorage.setItem('token', "");
    sessionStorage.setItem('userName', "");
    this.authService.logout();
  }

}
