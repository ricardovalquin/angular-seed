import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {StateService} from '@uirouter/angular/lib';
import { SearchComponent } from './search.component';
import {APP_BASE_HREF} from '@angular/common';
import {VideoService} from '../../../core/service/video/video.service';
import {CommonService} from '../../../core/service/common/common.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };
  const videoServiceStub = {
    updateVideoList: () => {}
  };
  const commonServiceStub = {
    navBarState: () => {
      return Observable.of([]);
    },
    switchNavBarState: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: VideoService, userValue: videoServiceStub},
        {provide: StateService, useValue: stateServiceStub},
        {provide: CommonService, userValue: commonServiceStub},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
