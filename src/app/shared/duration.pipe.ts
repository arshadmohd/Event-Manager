import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: return 'Half Day';
      case 2: return 'Full Day';
      default: return value.toString();
    }
  }
}
