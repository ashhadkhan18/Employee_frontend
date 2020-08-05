import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplyoeeListComponent } from './emplyoee-list/emplyoee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employee-list',component: EmplyoeeListComponent},
  {path:'employee-detail/:id',component:EmployeeDetailsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
