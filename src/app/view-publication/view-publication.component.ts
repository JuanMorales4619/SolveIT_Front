import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-publication',
  templateUrl: './view-publication.component.html',
  styleUrls: ['./view-publication.component.css']
})
export class ViewPublicationComponent {
  constructor(private http: HttpClient, private router:Router) { }
  publication: any;
  ngOnInit(){
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer '+token};
    const actualPublicationId = sessionStorage.getItem('actualPublicationId');
    let response = this.http.get<any>('api/v1/rest/publication/id/'+actualPublicationId, { headers });
      response.subscribe((data)=>this.publication = data);
    response.subscribe((data)=> console.log(data)
    );
    
  }
  onClick(){
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer '+token};
    const actualPublicationId = sessionStorage.getItem('actualPublicationId');
    let body = {publicationTitle:this.publication.publicationTitle, description:this.publication.description
      , phone:this.publication.phone, categoryDescription:this.publication.category.description,userName:this.publication.userName, status:false};

    let response = this.http.put<any>('api/v1/rest/publication/'+actualPublicationId,body,{ headers });
      response.subscribe((data)=>console.log(data)
      );
      this.router.navigate(['/']);
  }
}
