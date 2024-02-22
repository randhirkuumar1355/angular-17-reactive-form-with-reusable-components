import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/layout/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { InputComponent } from './shared/components/input/input.component';
import { RadioComponent } from './shared/components/radio/radio.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRouting = [ IndexComponent, HeaderComponent, FooterComponent, EmployeesListComponent, CreateEmployeeComponent, 
  
  ButtonComponent,
  CheckboxComponent,
  InputComponent, 
  RadioComponent,
  PageNotFoundComponent] 
