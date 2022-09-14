import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDeleteText]',
})
export class DeleteTextDirective implements OnInit {
  @Input() appDeleteText = false;

  constructor(private eleRef: ElementRef) {}
  @HostListener('click') onClick() {
    this.eleRef.nativeElement.style = !this.appDeleteText
      ? 'text-decoration: line-through;'
      : 'text-decoration: none;';
  }
  ngOnInit() {
    if (this.appDeleteText) {
      this.eleRef.nativeElement.style = 'text-decoration: line-through;';
    }
  }
}
