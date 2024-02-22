import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { Emp } from '../../shared/models/emp';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent implements OnInit {
  public employees: Emp[] = [];
  public btnType: string = 'button';
  public lblButton: string = 'Add New';
  public clsButton: string = 'btn-sm btn-primary';
  public icnClass: string = 'fa-plus-circle';

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  //Get all employees
  public getEmployees(){
    this.empService.getEmployees().subscribe((respData: any) => {
      if(respData.length>0){
        this.employees = respData;
        console.log('Employees List =>', this.employees);
      }
    });
  }

  btnNew(){
    console.log('Btn Event =>');
    this.router.navigate(['/create-employee']);
  }
}
