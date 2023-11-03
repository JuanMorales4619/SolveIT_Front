import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-publication',
  templateUrl: './view-publication.component.html',
  styleUrls: ['./view-publication.component.css']
})
export class ViewPublicationComponent {
  constructor(private http: HttpClient) { }
  publication: any;

  ngOnInit(){
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer '+token}
    const actualPublicationId = sessionStorage.getItem('actualPublicationId')
    let response = this.http.get<any>('api/v1/rest/publication/id/'+actualPublicationId, { headers });
      response.subscribe((data)=>this.publication = data);
    console.log(this.publication);
    
  }
  onClick(){

  }
}
