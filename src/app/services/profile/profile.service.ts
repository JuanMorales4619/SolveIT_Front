import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public PATH_SERVER:string = "../../../assets/testing/postings.json";
  public header = new HttpHeaders();

  constructor(
    private httpClient:HttpClient
  ) { }

  loadUserData(idUser:number): Observable<any> {

    this.header = this.header
      //.set('Authorization', token)
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.get<any>(
      this.PATH_SERVER
    ).pipe(tap(
      (res) => {
        if(res){
          console.log(res);
          this.saveDataUser(res.data);
        }    
      }
    ))
  }

  private saveDataUser(dataUser:any){
    localStorage.setItem("USER_DATA", dataUser);
  }

  public getDataUser(){
    return localStorage.getItem("USER_DATA");
  }

}
