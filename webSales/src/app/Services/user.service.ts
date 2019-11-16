import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http: HttpClient) { }

  createUser(user:User){
    return this.http.post(this.baseUri + '/api/user/create',user,{headers:this.headers});
  }
  getUser(){
    return this.http.get(this.baseUri + '/api/user/read',{headers:this.headers});
  }
  updateUser(user: User, id: string){
    return this.http.put(this.baseUri + '/api/user/update/' + id,user,{headers:this.headers});
  }
  deleteUser(id: string){
    return this.http.delete(this.baseUri + '/api/user/delete/'+id,{headers:this.headers});
  }

  setter(user:User){
    this.user = user;
  }
  getter(){
    return this.user;
  }

}
