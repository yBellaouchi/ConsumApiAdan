import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective implements OnInit {
  @Input() appItalic: number;

   constructor(private  el:ElementRef) { }
    ngOnInit() {
    this.el.nativeElement.style.fontStyle='italic';
    this.el.nativeElement.style.fontSize=this.appItalic+'px';
  }

}
