import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ekreative-directives',
  templateUrl: './directives.template.html',
  styleUrls: ['./directives.styles.scss']
})
export class DirectivesComponent implements OnInit {

  public list: any[] = [1,2,3,4,5,6,7,8,9,10];
  public data: any = {
    count: 5,
    selected: 2
  };
  public listForIf: any[] = [];
  public color: string = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public select(value: number | string): any {
    this.data.selected = value;
  }

  public selectBackground(value: string): any {
    this.color = value;
  }

}
