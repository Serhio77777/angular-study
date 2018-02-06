import {
  Component,
  ViewChild,
  ContentChild,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit } from '@angular/core';

import { ChildComponent } from './child/child.component';

@Component({
  selector: 'ekreative-lifecycle',
  templateUrl: './lifecycle.template.html',
  styleUrls: ['./lifecycle.styles.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {
  @Input() public element: any;

  @ViewChild(ChildComponent) public childComponent: ChildComponent;

  public counter: number = 0;

  constructor() { }

  public onChanged(increased: any): void {
    if (increased) {
      this.counter++;
    } else {
      this.counter--;
    }
		console.log('ParentComponent', this.counter);
	}

  public ngOnChanges(): void {
    console.log('OnChanges', this.element)
  }

  public ngOnInit(): void {
    console.log('INITIALIZED')
  }

  public ngDoCheck(): void {
    console.log('DoCheck', this.element)
  }

  public ngAfterViewInit(): void  {
    console.log('AfterViewInit', this.childComponent.someString)
  }

  public ngAfterViewChecked(): void  {
    console.log('AfterViewChecked', this.childComponent.someString)
  }

  public ngAfterContentInit(): void  {
    console.log('AfterContentInit')
  }

  public ngAfterContentChecked(): void  {
    console.log('AfterContentChecked')
  }

  public ngOnDestroy(): void {
    console.log('DESTROY')
  }

}
