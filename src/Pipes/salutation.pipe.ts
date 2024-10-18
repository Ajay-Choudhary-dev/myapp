import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})

export class SalutationPipe implements PipeTransform {
  transform(value: string, gender: string): string {
    if (!value) return value;

    const salutation = gender === 'Female' ? 'Miss.' : 'Mr.';
    return `${salutation} ${value}`;
  }
}