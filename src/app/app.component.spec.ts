import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { MainService } from './services/main.service';
import { Logger } from './services/logger.service';

// import { RoutingConfig } from './app.routes';
// import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
// import { DirectivesComponent } from './components/directives/directives.component';
// import { WayBindingComponent } from './components/way-binding/way-binding.component';
// import { TestRoutingComponent } from "./components/test-routing/test-routing.component";
// import { AlbumComponent } from './components/album/album.component';
// import { ArtistComponent } from "./components/artist/artist.component";
// beforeAll(async(() => {
//   console.log('Test Start!')
// }));

// take a title and a function containing one or more specs.
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // LifecycleComponent,
        // DirectivesComponent,
        // WayBindingComponent,
        // TestRoutingComponent,
        // AlbumComponent,
        // ArtistComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        BrowserDynamicTestingModule
      ],
      providers: [
        MainService,
        Logger
      ]
    }).compileComponents();
  }));
  // afterEach(async(() => {
  //   console.log('Test Point Finish...')
  // }));
  //
  // afterAll(async(() => {
  //   console.log('Test Finish...')
  // }));

// take a title and a function containing one or more expectations
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));



// test search
  // it('should render title in a h1 tag with Welcome to Project!', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Project!');
  //   expect(compiled.querySelector('.title').textContent).toContain('Welcome to Project!');;
  // }));

// component
  it(`change data using methods`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    console.log('________App_______', fixture)
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const component = fixture.componentInstance;
    // it('Check default value', () => {
      expect(component.testTextObject.testingElement).toBeFalsy();
      expect(component.testArray[2]).toBeGreaterThan(1);
      expect(JSON.stringify(component.testObject)).toContain(JSON.stringify({
        username: 'Test User 1',
        email: 'lore@gods.sky'
      }));
    // })
    // it('Check pushElement', () => {
      component.pushElement()
      expect(component.testArray.length).toBeGreaterThan(3);
      expect(component.testArray).toContain(2);
    // })
    // it('Check deleteElement', () => {
      component.deleteElement()
      component.deleteElement()
      component.deleteElement()
      expect(component.testArray.length).toBeLessThan(4);
      expect(component.testArray).toContain(4);
    // })
    // it('Check changeTestingElement', () => {
      component.testTextObject.testingElement = 'Ash nazg durbatulûk, ash nazg gimbatul, Ash nazg thrakatulûk agh burzum-ishi krimpatul.'
      component.changeTestingElement()
      expect(component.testTextObject.testingModel).toEqual(component.testTextObject.testingElement);
    // })
    // it('Check getDataFromService / pushTheBus', () => {
      // component.getDataFromService()
      component.pushTheBus()
      expect(JSON.stringify(Object.keys(component.testObject))).toEqual(JSON.stringify(['username', 'email', 'location']));
    // })
  }));

// component and template
  // it(`change data using template`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   const component = fixture.componentInstance;
  //   const elements = {
  //     addArrayElement: compiled.querySelector('#add'),
  //     removeArrayElement: compiled.querySelector('#delete'),
  //     input: compiled.querySelector('.text'),
  //     link: compiled.querySelector('.true-power')
  //   }
  //   // it('Check default value', () => {
  //     expect(component.testTextObject.testingElement).toBeFalsy();
  //     expect(component.testArray[2]).toBeGreaterThan(1);
  //     expect(JSON.stringify(component.testObject)).toContain(JSON.stringify({
  //       username: 'Test User 1',
  //       email: 'lore@gods.sky'
  //     }));
  //   // })
  //   // it('Check addArrayElement', () => {
  //     elements.addArrayElement.click()
  //     expect(component.testArray.length).toBeGreaterThan(3);
  //   // })
  //   // it('Check removeArrayElement', () => {
  //     elements.removeArrayElement.click()
  //     elements.removeArrayElement.click()
  //     expect(component.testArray.length).toBeLessThan(4);
  //   // })
  //   // it('Check input', () => {
  //     elements.input.value = 'Ash nazg durbatulûk, ash nazg gimbatul, Ash nazg thrakatulûk agh burzum-ishi krimpatul.'
  //     elements.input.dispatchEvent(new Event('input'));
  //     expect(component.testTextObject.testingModel).toEqual('Ash nazg durbatulûk, ash nazg gimbatul, Ash nazg thrakatulûk agh burzum-ishi krimpatul.');
  //   // })
  //   // it('Check link', () => {
  //     elements.link.click()
  //     expect(JSON.stringify(Object.keys(component.testObject))).toEqual(JSON.stringify(['username', 'email', 'location']));
  //   // })
  //   console.log('________Elements_______', elements)
  // }));




  // it(`Router testing`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   const buttons = {
  //     directivesLinkButton: compiled.querySelector('#directives'),
  //     lifecycleLinkButton: compiled.querySelector('#lifecycle'),
  //     routingLinkButton: compiled.querySelector('#routing')
  //   }
  //   expect(buttons.directivesLinkButton.textContent).toContain('directives');
  //   expect(buttons.lifecycleLinkButton.name).toContain('directives');
  //   expect(buttons.routingLinkButton.getAttribute('routerLink')).toContain(['routing', '20/02/2018']);
  //   console.log('________app_______', fixture)
  // }));

});
