import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  CalculateFactorial(num: number): number {
    if (num < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
}