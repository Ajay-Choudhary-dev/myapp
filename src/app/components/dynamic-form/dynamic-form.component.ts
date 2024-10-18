import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})

export class DynamicFormComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  // Create a new form group for employee
  addEmployee() {
    const employeeFormGroup = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      department: ['', Validators.required],
      address: ['']
    });

    this.employeeArray.push(employeeFormGroup);
  }

  // Get employee array
  get employeeArray() {
    return this.employeeForm.get('employees') as FormArray;
  }

  // Remove an employee form group
  removeEmployee(index: number) {
    this.employeeArray.removeAt(index);
  }

  // Handle form submission
  submit() {
    console.log(this.employeeForm.value);
  }
}
