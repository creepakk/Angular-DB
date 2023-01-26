import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, retry, tap } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/user'

  createUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data)
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl)
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`)
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data)
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
