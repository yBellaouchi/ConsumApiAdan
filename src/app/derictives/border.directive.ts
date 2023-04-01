import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {
  @Input() appBorder: number;

  constructor( private  el:ElementRef) { }
  ngOnInit(): void {
    console.log(this.el.nativeElement);
         this.el.nativeElement.style.borderColor="red";
    this.el.nativeElement.style.BorderSize=this.appBorder+"px";
    
 
  }

}
