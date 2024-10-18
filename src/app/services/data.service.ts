import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'


export interface Employee {
  id: number;
  name: string;
  gender: string;
  salary: number;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employeesSubject.asObservable();

  constructor() {

    this.employeesSubject.next([{id:1,name:"JohnDoe",salary:75000,position:"SoftwareEngineer",gender:"Male"},
      {id:2,name:"JaneSmith",salary:68000,position:"MarketingSpecialist",gender:"Female"},
      {id:3,name:"DavidJohnson",salary:82000,position:"ProductManager",gender:"Male"},
      {id:4,name:"EmilyClark",salary:71000,position:"HRManager",gender:"Female"},
      {id:5,name:"ChrisEvans",salary:78000,position:"SalesExecutive",gender:"Male"},
      {id:6,name:"SophiaMiller",salary:62000,position:"GraphicDesigner",gender:"Female"},
      {id:7,name:"JamesAnderson",salary:90000,position:"DataScientist",gender:"Male"},
      {id:8,name:"OliviaWilson",salary:55000,position:"CustomerServiceRepresentative",gender:"Female"},
      {id:9,name:"MichaelTaylor",salary:95000,position:"ITManager",gender:"Male"},
      {id:10,name:"AvaMartinez",salary:67000,position:"BusinessAnalyst",gender:"Female"}])
  }

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
