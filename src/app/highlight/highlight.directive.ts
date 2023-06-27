import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

// add directive
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  // inject a reference to the DOM element
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
