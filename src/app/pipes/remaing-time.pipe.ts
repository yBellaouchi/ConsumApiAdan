import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaingTime'
})
export class RemaingTimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    console.log("rem "+value)
    let time=value.split(' ')[0];
    let hour=time.split(':')[0];
    let minute=time.split(':')[1];
    const now=new Date();
    console.log(now)
    console.log((parseInt(hour)-now.getHours())*60 + (parseInt(minute)-now.getMinutes()))
    return (parseInt(hour)-now.getHours())*60 + (parseInt(minute)-now.getMinutes());
  }

}
