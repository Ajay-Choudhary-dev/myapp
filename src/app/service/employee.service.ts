import { Injectable } from '@angular/core';


export interface Employee {
  id: number;
  name: string;
  position: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'John Doe', gender: 'male' },
    { id: 2, name: 'Jane Smith', gender: 'female' },
    { id: 3, name: 'Alex Johnson', gender: 'male' },
    { id: 4, name: 'Emily Davis', gender: 'female' }
  ];
  employees$: any;

  getAllEmployees() {
    return this.employees;
  }

  getMaleEmployees() {
    return this.employees.filter(employee => employee.gender === 'male');
  }

  getFemaleEmployees() {
    return this.employees.filter(employee => employee.gender === 'female');
  }
}
