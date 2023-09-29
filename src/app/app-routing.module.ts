import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { USERS } from './mock-data/user';

const routes: Routes = [{path:'api/users', component:USERS}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
