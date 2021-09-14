import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   Url:string="http://localhost:3000/users";
  constructor(private MyClinet:HttpClient) {
   }
   getAllUsers(){
    return this.MyClinet.get(this.Url);
  }

  getUserById(id){
    return this.MyClinet.get(this.Url+"/"+id);
  }
  AddUser(user){
    return this.MyClinet.post(this.Url,user);
  }
  UpdateUser(id,user){
    return this.MyClinet.put(this.Url+"/"+id, user);
  }
  Delete(id){
  return this.MyClinet.delete(this.Url+"/"+id);
}
}
