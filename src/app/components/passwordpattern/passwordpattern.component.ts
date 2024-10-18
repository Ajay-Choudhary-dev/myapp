import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordMatchValidator } from '../../validators/password-validator.validator';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-passwordpattern',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './passwordpattern.component.html',
  styleUrl: './passwordpattern.component.css'
})

export class PasswordpatternComponent implements OnInit {
  passwordForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: PasswordMatchValidator('password', 'confirmPassword') // Attach the custom validator
    });
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      console.log('Form Submitted!', this.passwordForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}