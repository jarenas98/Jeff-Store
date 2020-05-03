import { Directive, ElementRef } from '@angular/core';
// import { element } from 'protractor';

@Directive({
  selector: '[appHigligth]',
})
export class HigligthDirective {

  constructor(
    element: ElementRef
    ) {
      element.nativeElement.style.backgroundColor = 'red';
    }
}
