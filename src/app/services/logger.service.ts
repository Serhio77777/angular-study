import {Injectable} from '@angular/core';

// @Injectable() // скобки обязательны
export class Logger {

  private logs: string[] = [];

  public log(message: string): void {
    this.logs.push(message);
    console.log(message);
  }
}
