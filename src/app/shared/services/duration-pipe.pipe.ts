import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipe implements PipeTransform {
  // Transforma o valor em minutos e segundos
  transform(value: number): string {
    if (!value) return '0:00';
    const minutes = Math.floor(value / 60000);
    const seconds = Math.floor((value % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
