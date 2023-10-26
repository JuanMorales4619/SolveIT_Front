import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {
  type: any;

  submit(publication: any){

    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer '+token}
    const userName = sessionStorage.getItem('userName');
    var body = {publicationTitle:"", description:"", phone:"", categoryDescription:"",userName:""};
    body.publicationTitle= publication.form.value.title;
    body.description= publication.form.value.description;
    body.phone= publication.form.value.contact;
    body.categoryDescription= publication.form.value.type;
    body.userName = userName? userName:" ";

    
    let response = this.http.post<any>('api/v1/rest/publication',body,{headers});
    console.log("aqui mando una cosa");
    response.subscribe((data)=>console.log(data));
    console.log(publication);
  }
  constructor(private http:HttpClient){}

  ngOnInit(): void{
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer '+token}
    let response = this.http.get<any>('api/v1/rest/publicationType',{headers});
    response.subscribe((data)=>this.type = data);
  }

}
