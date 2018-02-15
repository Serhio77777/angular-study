import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ekreative-way-binding',
  templateUrl: './way-binding.template.html',
  styleUrls: ['./way-binding.styles.scss']
})
export class WayBindingComponent implements OnInit {

  public clicks: number = 0;
  public someValue: number = 0;
  public data: any = {
    username: '',
    description: ''
  }

  constructor() { }

  public ngOnInit(): void {}

  public justClick(): void {
    this.clicks++;
  }

}
