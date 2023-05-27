import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'input[appSpecialCharachter]',
  standalone: true
})
export class SpecialCharacterDirective {
  constructor(private readonly el: ElementRef) { }
  
  @Output() valueChange = new EventEmitter();
  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this.el.nativeElement.value;
    const newValue = initalValue.replace(/[^a-zA-Z0-9.@_-]*/g, '');
       this.el.nativeElement.value = newValue;
       this.valueChange.emit(newValue);
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
