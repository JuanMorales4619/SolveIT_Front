import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isRegisteredIn = false;
  login() {
    this.isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }

  logout() {
    this.isLoggedIn = false;
    sessionStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }
  getIsLoggedIn(){
    return this.isLoggedIn =  (sessionStorage.getItem('isLoggedIn')== "true");
  }
  register(){
    this.isRegisteredIn = true;
    sessionStorage.setItem('isRegisteredIn', String(this.isRegisteredIn));
  }
  getIsRegisteredIn(){
    return this.isRegisteredIn = (sessionStorage.getItem('isRegisteredIn')== "true");
  }
}
