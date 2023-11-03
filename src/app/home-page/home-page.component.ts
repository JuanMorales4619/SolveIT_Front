import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products: any;



  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
      const headers = { 'Authorization': 'Bearer '+token}
      let response = this.http.get<any>('api/v1/rest/publication', { headers });
      response.subscribe((data)=>this.products = data.data);
  }
  onClick(product: any){
    let actualPublication = product
    sessionStorage.setItem('actualPublicationId',actualPublication.id);
    this.router.navigate(['/publication/view']);
  }

}
