import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }



  baseUrl = 'http://localhost:8080/api/post'

  createPost(user_id: number, data: any): Observable<IPost> {
    return this.http.post<IPost>(`${this.baseUrl}/${user_id}`, data)
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.baseUrl}/${id}`)
  }

  updatePost(id: number, data: any): Observable<IPost> {
    return this.http.put<IPost>(`${this.baseUrl}/${id}`, data)
  }

  deletePost(id: number): Observable<IPost> {
    return this.http.delete<IPost>(`${this.baseUrl}/${id}`)
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseUrl}s`)
  }

  getPostsByUser(user_id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseUrl}s/${user_id}`)
  }
}
