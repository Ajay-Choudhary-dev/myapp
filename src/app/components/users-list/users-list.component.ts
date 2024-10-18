import { Component,ViewChild } from '@angular/core';
import * as data from './employee.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSearchFilterModule } from 'ngx-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../../employee.service';



@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [FontAwesomeModule, NgxPaginationModule, NgxSearchFilterModule, FormsModule, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})

export class UsersListComponent {
  
  employees: any[] = [];
  faUser = faUser;
  p: any;
  page: number = 1;
  faEye = faEye;

  @ViewChild('closebutton') closebutton: any;

  ngOnInit() {
    this.employees = (data as any).default;
  }

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.employees.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  //selectedUser: any;
  selectedUser: any = {}; 

  viewUserDetails(user: Employee) {
    console.log('Selected User:', user);
    this.selectedUser = user;
}

  deleteUser(user: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete ${user.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the deletion operation here
        this.employees = this.employees.filter(emp => emp.id !== user.id);

        Swal.fire(
          'Deleted!',
          `${user.name} has been deleted.`,
          'success'
        );
      }
    });
  }

  saveUser() {
    // Check if selectedUser is defined
    if (!this.selectedUser) {
      console.error('No user selected to save.');
      return;
    }
  
    const index = this.employees.findIndex(emp => emp.id === this.selectedUser.id);
    if (index !== -1) {
      // Update the user in the array
      this.employees[index] = { ...this.selectedUser }; // Create a new object to ensure reactivity
    } else {
      console.error('User not found in the employees list.');
    }
  }

}

