import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { VehicleResolver } from './VehicleResolver';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
path:'student',
component: StudentComponent,
resolve: {
  vehicle: VehicleResolver
  },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
