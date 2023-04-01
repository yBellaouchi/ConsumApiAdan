
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit{
@Input () appBold:number;
  constructor(private  el:ElementRef) { }
  ngOnInit() {
  this.el.nativeElement.style.fontStyle='bold';
  this.el.nativeElement.style.fontSize=this.appBold+'px';
}
}
