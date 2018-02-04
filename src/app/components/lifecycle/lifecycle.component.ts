import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ekreative-lifecycle',
  templateUrl: './lifecycle.template.html',
  styleUrls: ['./lifecycle.styles.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy {

  constructor() { }

  public ngOnInit(): void {
    console.log('INITIALIZED')
  }

  public ngOnDestroy(): void {
    console.log('DESTROY')
  }

}
