import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSearchFilterModule } from 'ngx-search-filter';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,
    NgxPaginationModule,
    NgxSearchFilterModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  loading = false;
  newUser = { id: '', FIRST_NAME: '', LAST_NAME: '', EMAIL: '', SALARY: '', };
  page: number = 1;
  showForm = false;

  constructor(private userService: UserService) { }

  toggleForm() {
    this.showForm = !this.showForm;  // Toggle form visibility.
    console.log(this, this.showForm);
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  // Fetch users
  fetchUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }

  // Add user
  addUser() {
    if (this.newUser.id && this.newUser.FIRST_NAME, this.newUser.LAST_NAME, this.newUser.SALARY, this.newUser.EMAIL) {
      this.userService.addUser(this.newUser).subscribe(
        (user) => {
          this.users.push(user);
          this.newUser = { id: '', FIRST_NAME: '', LAST_NAME: '', EMAIL: '', SALARY: '' };
          this.showForm = false; // Hide the form after submission
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }


  // Delete user
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== id);
      },
      (error) => {
        console.error(error);
      }
    );
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

    this.users.sort((a, b) => {
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
}
