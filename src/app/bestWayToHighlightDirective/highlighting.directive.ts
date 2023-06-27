import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlighting]',
})
export class HighlightingDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    //   this.render.setStyle(
    //     this.elementRef.nativeElement,
    //     'background-color',
    //     'green'
    //   );
  }

  @HostListener('mouseenter') mouseover() {
    this.highlightTxt('lightGreen');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highlightTxt('');
  }

  // helper method,
  private highlightTxt(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
