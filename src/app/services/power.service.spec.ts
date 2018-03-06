import { TestBed, inject } from '@angular/core/testing';

import { PowerService } from './power.service';

describe('PowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerService]
    });
  });
  // inject -> allows us to get dependencies 
  it('should be created', inject([PowerService], (service: PowerService) => {
    console.log(service)
    expect(service).toBeTruthy();
  }));

  it('default irony value...', inject([PowerService], (service: PowerService) => {
    // expect(service.secret).not.toEqual('Man as the center of the universe...');

    expect(service.irony).toEqual('Man as the center of the universe...');
  }));

  it('check methods', inject([PowerService], (service: PowerService) => {
    expect(service.testFunction()).toEqual('I am Salat)');
    expect(JSON.stringify(service.ironyFunction())).toContain(service.irony);
    service.secretFunction('New Secret!');
    expect(service.testFunction()).not.toEqual('I am Salat)');
  }));

});
