import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  isAuthenticated(email: string, password: string): boolean {
    if (email === 'admin' && password === 'admin') {
      return true;
    }
    return false;
  }
}
