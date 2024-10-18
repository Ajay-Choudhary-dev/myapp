import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet,UsersListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
