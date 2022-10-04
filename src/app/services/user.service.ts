import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:3000/users/';
  constructor(
    private http: HttpClient
  ) { }

  getUserList() {
    return this.http.get<any>(this.apiUrl)
  }

  addUser(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateUser(data: any, id: number) {
    return this.http.put<any>(this.apiUrl+id ,data)
  }

  deleteUser(id: number) {
    return this.http.delete<any>(this.apiUrl + id)
  }
}
