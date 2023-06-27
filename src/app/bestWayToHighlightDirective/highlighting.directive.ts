import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighting]',
})
export class HighlightingDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );
  }
}
