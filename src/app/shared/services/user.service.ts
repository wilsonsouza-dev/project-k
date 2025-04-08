import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {}

  setUser(user: User | null): void {
    if (user) {
      console.log('Setting User');
      localStorage.setItem('userId', user.id);
    } else {
      console.log('Removing User');
      localStorage.removeItem('userId');
    }
    console.log('User set', user);
    this.userSubject.next(user);
  }
}
