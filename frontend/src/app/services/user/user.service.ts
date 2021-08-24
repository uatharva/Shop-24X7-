import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  register(user: any): Observable<any> {
    return this.httpClient.post('/api/v1/users/register', user);
  }
  login(user: any): Observable<any> {
    return this.httpClient.post('/api/v1/users/login', user);
  }

  getProfile(id: any): Observable<any> {
    return this.httpClient.get('/api/v1/profile/' + id);
  }
  saveAddress(address: any, id: any): Observable<any> {
    return this.httpClient.post('/api/v1/profile/address/' + id, address);
  }
}
