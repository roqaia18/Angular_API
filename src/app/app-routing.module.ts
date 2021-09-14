import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './Components/user-component/user-component.component';
import { UserDetialsComponentComponent } from './Components/user-detials-component/user-detials-component.component';

const routes: Routes = [
  {path:"", redirectTo:"users", pathMatch:"full"},
  {path:"users", component:UserComponentComponent},
  {path:"users/:id", component:UserDetialsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
