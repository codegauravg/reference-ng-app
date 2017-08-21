import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ChildCommService {

  popItemSelected = new EventEmitter<any>();
  
  constructor() { }

}
