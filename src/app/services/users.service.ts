import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface User {
  id: number;
  name: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  private users: User[] = [];

  constructor() { }

  addUser(user: User): void {
    this.users.push(user);
    this.usersSubject.next(this.users);
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index > -1) {
      this.users[index] = updatedUser;
      this.usersSubject.next(this.users);
    }
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    this.usersSubject.next(this.users);
  }
}
