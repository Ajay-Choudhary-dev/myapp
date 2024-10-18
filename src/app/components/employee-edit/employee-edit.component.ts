import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [FormsModule, EmployeeAddComponent, EmployeeCrudComponent],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css',
  inputs: ['selectedEmployee']
})
export class EmployeeEditComponent {

  // showCrudComponent: boolean = false;
  selectedEmployee: any = { id: 0, name: '', position: '', department: '', gender: '' };
  employees: any = [];

  onSave() {
    if (this.selectedEmployee) {
      this.employees.push({ ...this.selectedEmployee });
      // this.showCrudComponent = true;
    } else {
      console.error('selectedEmployee is undefined');
    }
  }

  // onCancel() {
  //   this.showCrudComponent = false;
  // }
}
