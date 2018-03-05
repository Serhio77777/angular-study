import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Logger } from './logger.service';

@Injectable()
export class MainService {
  constructor(private _logger: Logger) {}

  getCurrent(): User {
    this._logger.log('Getting user...');
    return {
      username: 'Admin',
      email: 'admin@yopmail.com',
      location: {
        lng: 2384729,
        lat: 283472398
      }
    };
  }
}
