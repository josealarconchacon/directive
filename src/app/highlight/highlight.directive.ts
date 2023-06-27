import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
} from '@angular/core';

// add directive
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // inject a reference to the DOM element
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'lightBlue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
