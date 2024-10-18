import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  // Fetch users
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add new user
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
