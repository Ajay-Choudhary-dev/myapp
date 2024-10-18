import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }

  employees: any[] = [];
  filteredEmployees: any[] = [];
  sortDirection: boolean = true;



  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employees = this.employeeService.getAllEmployees();
  }

  getMaleEmployees(): void {
    this.employees = this.employeeService.getMaleEmployees();
  }

  getFemaleEmployees(): void {
    this.employees = this.employeeService.getFemaleEmployees();
  }
}
