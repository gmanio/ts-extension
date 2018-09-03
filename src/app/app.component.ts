import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this._elementRef.nativeElement.removeAttribute("ng-version");
  }
}
