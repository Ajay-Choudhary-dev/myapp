import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<Employee[]>([
    { id: 1, name: 'Alice', position: 'Developer' },
    { id: 2, name: 'Bob', position: 'Designer' },
    { id: 3, name: 'Charlie', position: 'Manager' }
  ]);
  employees$ = this.employeesSubject.asObservable();

  // Create
  addEmployee(employee: Employee) {
    const currentEmployees = this.employeesSubject.value;
    this.employeesSubject.next([...currentEmployees, employee]);
  }

  // Read
  getEmployees() {
    return this.employees$;
  }

  // Update
  updateEmployee(id: number, updatedEmployee: Employee) {
    const currentEmployees = this.employeesSubject.value;
    const employeeIndex = currentEmployees.findIndex(emp => emp.id === id);
    if (employeeIndex !== -1) {
      currentEmployees[employeeIndex] = updatedEmployee;
      this.employeesSubject.next(currentEmployees);
    }
  }

  // Delete
  deleteEmployee(id: number) {
    const currentEmployees = this.employeesSubject.value;
    const updatedEmployees = currentEmployees.filter(emp => emp.id !== id);
    this.employeesSubject.next(updatedEmployees);
  }
}
