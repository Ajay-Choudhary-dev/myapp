import { Component, EventEmitter } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs: ['employees', 'editEmployee'],
  outputs: ['deleteEmpEvent', 'editEmpEvent']
})
export class EmployeeTableComponent {

  employees: any;
  editEmployee: any;

  deleteEmpEvent = new EventEmitter();
  editEmpEvent = new EventEmitter();
  
  deleteEmp(eId: number) {
    this.deleteEmpEvent.emit(eId);
  }
  editEmp(emp: any) {
    this.editEmpEvent.emit(emp);
  }
}
