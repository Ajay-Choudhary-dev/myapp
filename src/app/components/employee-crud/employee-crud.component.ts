import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Component, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { OrdinalPipe } from '../../../Pipes/ordinal-pipe.pipe';
import { AgePipe } from '../../../Pipes/age-pipe.pipe';
import { SalutationPipe } from '../../../Pipes/salutation.pipe';
import { FilterPipe } from '../../../Pipes/filter.pipe';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

import { EmployeeEditComponent } from "../employee-edit/employee-edit.component";


@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [FormsModule, NgxPaginationModule, OrdinalPipe, AgePipe, SalutationPipe, FilterPipe, EmployeeAddComponent, EmployeeTableComponent, EmployeeEditComponent, EmployeeEditComponent],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})

export class EmployeeCrudComponent {

  @ViewChild('closebutton') closebutton: any;
  employees  = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', gender: 'M' },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Marketing', gender: 'M' },
    { id: 3, name: 'Triveni', position: 'Designer', department: 'Marketing', gender: 'F' }
  ];

  selectedEmployee: any = { id: 0, name: '', position: '', department: '', gender: '' };
  isEdit: boolean = false;

  editEmployee(emp: any) {
    this.selectedEmployee = emp;
    this.isEdit = true;
  }

  addEmployee(newEmpObj: any) {
    this.employees.push(newEmpObj);
  }
  deleteEmployee(eId: number) {
    this.employees = this.employees.filter(emp => {
      return emp.id != eId;
    })
  }
}
