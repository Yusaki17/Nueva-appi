import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl ='https://jsonplaceholder.typicode.com/posts';
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient){};

  getPost(){
    return this.http.get<Post[]>(this.apiUrl);
  }
  getUser(){
    return this.http.get<User[]>(this.userUrl);
  }
}