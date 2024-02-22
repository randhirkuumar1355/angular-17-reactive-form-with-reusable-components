import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../shared/services/employee.service';
import { Emp } from '../../shared/models/emp';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  objEmployee: Emp = new Emp();
  empId: number = 0;
  public btnType: string = 'button';
  public btnSubmitType: string = 'submit';

  public lblBackButton: string = 'Back To List';
  public clsBackButton: string = 'btn-sm btn-secondary';
  public icnBackClass: string = 'fa-backward';

  public lblCancelButton: string = 'Reset';
  public clsCancelButton: string = 'btn-sm btn-danger ms-1';
  public icnCancelClass: string = 'fa-close';

  public lblSubmitButton: string = 'Submit';
  public clsSubmitlButton: string = 'btn-sm btn-success ms-1';
  public icnSubmitClass: string = 'fa-save';
  
  public lblHeader: string = 'Create Employee';
  public lblBtn: string = 'Submit';
  constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['Male'],
      doj: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  //Insert Employee
  onSubmit():void {
    this.objEmployee.firstName = this.employeeForm.value.firstName;
    this.objEmployee.lastName = this.employeeForm.value.lastName;
    this.objEmployee.gender = this.employeeForm.value.gender;
    this.objEmployee.doj = this.employeeForm.value.doj;
    this.objEmployee.email = this.employeeForm.value.email;
    this.objEmployee.mobile = this.employeeForm.value.mobile;
    this.objEmployee.salary = this.employeeForm.value.salary;
    if (this.employeeForm.valid) {
        this.empService.postEmployee(this.objEmployee).subscribe((respData: any) => {
        if(respData!=null){
          this.clearForm();
          this.toastr.success('Employee created successfully !');
        } else {
          this.toastr.success('Something went wrong !');
        }
      });
    } else {
      this.toastr.error('Please enter the required input fields !');
    }
  }

  //Clear controls after action
  clearForm() {
    this.employeeForm.reset({
      gender: 'Male'
    });
  }

  goToEmployeesList(){
    this.router.navigate(['/employees-list']);
  }
}
