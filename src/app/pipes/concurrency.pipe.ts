import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concurrency'
})
export class ConcurrencyPipe implements PipeTransform {

  transform(value: number): String {
    return value +"DH";
  }

}
