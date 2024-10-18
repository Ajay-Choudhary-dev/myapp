import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs: ['addEmpEvent']
})


export class EmployeeAddComponent {


  addEmpEvent = new EventEmitter();

  addEmp(id: any, name: any, position: any, department: any, gender: any) {
    this.addEmpEvent.emit({ id, name, position, department, gender });
    console.log(id);
    console.log(name);
    console.log(position);
    console.log(department);
    console.log(gender);
  }
}
