import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:3000/users/';
  user!: User;

  constructor(
    private http: HttpClient
  ) {
  }

  getUserList() {
    return this.http.get<User>(this.apiUrl)
      .pipe(map((data: any) => {
        let users = data
        return users?.map(function (user: User): User {
          return new User(user.firstName, user.lastName, user.email, user.roleUser, user.id)
        });
      }));
  }

  getInfoUser(id: string) {
    return this.http.get(this.apiUrl + id)
  }

  addUser(data: User) {
    return this.http.post<object>(this.apiUrl, data)
      .pipe(map(data => {
        console.log('data', data)
      }));
  }

  updateUser(data: User, id: number) {
    return this.http.put<User>(this.apiUrl + id, data)
  }

  deleteUser(id: number) {
    return this.http.delete<User>(this.apiUrl + id)
  }
}
