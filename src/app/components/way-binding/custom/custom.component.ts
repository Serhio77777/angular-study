import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ekreative-custom',
  templateUrl: './custom.template.html',
  styleUrls: ['./custom.styles.scss']
})
export class CustomComponent implements OnInit {

  public counterValue: any = 0;

  constructor() { }

  @Input()
  get counter() {
    return this.counterValue;
  }

  @Output() counterChange = new EventEmitter();

  set counter(value: number) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  public decrement(): void {
    this.counter--;
  }

  public increment(): void {
    this.counter++;
  }

  public ngOnInit(): void {}

}
