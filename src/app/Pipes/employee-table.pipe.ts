import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTable',
  standalone: true
})
export class EmployeeTablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
