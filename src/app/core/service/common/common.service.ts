import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CommonService {

  private _navBarState: Subject<boolean>;

  constructor() {
    this._navBarState = new Subject();
  }

  get navBarState(): Subject<boolean> {
    return this._navBarState;
  }

  switchNavBarState(newState: boolean): void {
    this._navBarState.next(newState);
  }

}
