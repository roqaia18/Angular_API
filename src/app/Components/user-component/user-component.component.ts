import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styles: [
  ]
})
export class UserComponentComponent implements OnInit {
  idUpdate;
  constructor(private MyService:UsersService ,private route:Router) { 
  }
 user;
id;
  name;
  age;
  email;
  city;
  street;
  users;
  nameUpdate;
  ageUpdate;
  emailUpdate;
  cityUpdate;
  streetUpdate;
  usersUpdate;
    ngOnInit(): void {
      this.MyService.getAllUsers().subscribe(
        (res)=>{this.users = res;},
        (err)=>{console.log(err);}
      );
    }
    Add(){
      let u={
        id:this.id,
        name:this.name,
        age:this.age,
        email:this.email,
        Address:{
          City:this.city,
          Street:this.street
        }
      };
      this.MyService.AddUser(u).subscribe(
        res=>location.reload()
      );
    }
    Delete(id){
      this.MyService.Delete(id).subscribe(
        res=>location.reload()
      );
    }
    data(user){
      this.idUpdate=user.id;
      this.nameUpdate=user.name;
      this.ageUpdate=user.age;
      this.emailUpdate=user.email;
      this.cityUpdate=user.Address.City;
      this.streetUpdate=user.Address.Street;
    }
    Update(){

      let updateUser={
        id:this.idUpdate,
        name:this.nameUpdate,
        age:this.ageUpdate,
        email:this.emailUpdate,
        Address:{
          City:this.cityUpdate,
          Street:this.streetUpdate
      }
    };
      this.MyService.UpdateUser(this.idUpdate,updateUser).subscribe(
        res=>location.reload()
      );
    }


}
