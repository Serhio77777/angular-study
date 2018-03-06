import { Component, Optional, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from './services/main.service';

interface ITestApp {
  username: string;
  email: string;
  location?: any;
}

@Component({
  selector: 'ekreative-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public testTextObject: any = {
    testingElement: '',
    testingModel: ''
  };
  public testArray: any = [1,2,3,4];

  public testObject: ITestApp = {
    username: 'Test User 1',
    email: 'lore@gods.sky'
  };

  constructor (
    private mainService: MainService,
    @Optional() private router: Router
  ) {}

  public goToDirectives(): void {
    this.router.navigate(['/directives']);
  }

  public pushElement(): void {
    this.testArray.push(this.testArray.length);
  }

  public deleteElement(): void {
    this.testArray = this.testArray.slice(1)
  }

  public changeTestingElement(): void {
    this.testTextObject.testingModel = this.testTextObject.testingElement;
  }

  private getDataFromService(): void {
    this.testObject = this.mainService.getCurrent();
  }

  public pushTheBus(): void {
    this.getDataFromService();
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
