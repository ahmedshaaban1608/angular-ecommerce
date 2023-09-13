import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regularPrice',
})
export class RegularPricePipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    return +(value * (100 / (100 - args[0]))).toFixed(2);
  }
}
