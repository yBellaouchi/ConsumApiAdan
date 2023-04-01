import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteDigitsPipe'
})
export class DeleteDigitsPipePipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
