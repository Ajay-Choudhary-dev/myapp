import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})

export class UserDetailsComponent {
  user: any;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient,
    private router: Router
  ) {

  }
  ngOnInit() {
    //   this.activatedRoute.params.subscribe((params) => {
    //     const userId = +params['id'];

    //     this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe((response: any) => {
    //       this.user = response;
    //     });
    //   })

    this.activatedRoute.data.subscribe((data) => {
      this.user = data['user'];
    });
  }

  goBack(): void {
    this.router.navigate(['/users']);  // Navigate to a specific route, e.g., user list
  }
}