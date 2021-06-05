
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { EmployeeComponent } from "./employee/employee.component";
import { NewEmployeeComponent } from "./new-employee/new-employee.component";

const routes: Routes = [
  
  {
    path: "",
    component: EmployeeComponent,
   
  },
  {
    path:"new",
    component:NewEmployeeComponent,
  },
  {
    path:"edit/:id",
    component:EditEmployeeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
