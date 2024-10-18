import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['a','child1']
})
export class Child2Component {
  a: number | undefined;
  child1: any;
  // cars: string[] = ['Tata', 'Honda', 'Maruti']
}
