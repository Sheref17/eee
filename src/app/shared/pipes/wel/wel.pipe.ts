import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wel'
})
export class WelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
