import { Injectable } from '@angular/core';

@Injectable()
export class PowerService {

  private secret: string = 'I am Salat)';
  public irony: string = 'Man as the center of the universe...';

  constructor() { }

  public testFunction(): string {
    return this.secret;
  }

  public ironyFunction(): any {
    return {
      irony: this.irony
    };
  }

  public secretFunction(secret?: string): void {
    this.secret = secret ? secret : this.secret;
  }

}
