import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe',
  standalone: true
})

export class AgePipe implements PipeTransform {
  transform(value: Date): number {
    if (!value) return 0;
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
