import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-user-detials-component',
  templateUrl: './user-detials-component.component.html',
  styles: [
  ]
})
export class UserDetialsComponentComponent implements OnInit {

  id;
  constructor(private MyActivated:ActivatedRoute, private MyService:UsersService) {
    this.id = MyActivated.snapshot.params.id;
   }
user;
  ngOnInit(): void {
    this.MyService.getUserById(this.id).subscribe(
      (res)=>{this.user = res;},
      (err)=>{console.log(err);}
    );
  }

}
