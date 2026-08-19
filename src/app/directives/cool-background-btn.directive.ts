import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolBackgroundBtn]'
})

export class CoolBackgroundBtnDirective implements OnInit {

  defaultColor: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)'
  defaultHover: string = ''

  @Input() backgroundColor: string = this.defaultColor;
  @Input() hoverColor: string = this.defaultHover;


  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.changeBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.changeBackgroundColor(this.backgroundColor);
  }

  ngOnInit() {
    this.changeBackgroundColor(this.backgroundColor);
  }

  changeBackgroundColor(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background', color);
  }
}
