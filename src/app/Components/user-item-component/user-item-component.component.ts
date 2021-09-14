import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-user-item-component',
  templateUrl: './user-item-component.component.html',
  styles: [
  ]
})
export class UserItemComponentComponent implements OnInit {
  id;
  name;
  age;
  email;
  city;
  street;
  constructor(private MyService:UsersService) { }
  ngOnInit(): void {
  }
  @Input() user;
  Delete(){
    this.MyService.Delete(this.user.id).subscribe();
  }
  data(){
    this.id=this.user.id;
    this.name=this.user.name;
    this.age=this.user.age;
    this.email=this.user.email;
    this.city=this.user.City;
    this.street=this.user.Street;
  }
  Update(){

    let updateUser={
      id:this.id,
      name:this.name,
      age:this.age,
      email:this.email,
      Address:{
        City:this.city,
        Street:this.street
    }
  };
    this.MyService.UpdateUser(this.user.id,updateUser).subscribe();
  }
}
