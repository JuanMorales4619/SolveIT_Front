import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';
  constructor(private http: HttpClient){}
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const headers = { 'Authorization': 'Bearer '+ sessionStorage.getItem('token')}
      let response = this.http.get<any>('api/v1/rest/publication/title/'+this.searchQuery,{headers});
      response.subscribe(data => console.log(data));
    }
  }

}
