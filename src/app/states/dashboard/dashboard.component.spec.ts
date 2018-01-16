import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Transition, StateService, UIRouterModule} from '@uirouter/angular/lib';

import { DashboardComponent } from './dashboard.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {VideoService} from '../../core/service/video/video.service';
import {CategoryService} from '../../core/service/category/category.service';
import {TranslateModule} from '@ngx-translate/core';
import {APP_BASE_HREF} from '@angular/common';

xdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let stateService: StateService;

  const transitionStub = {
    params: () => {
      return {category: 'animation', page: '1'};
    }
  };

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };

  const videoServiceStub = {
    updateVideoList: () => {
      return Promise.resolve(true);
    },
    videoList: () => {
      return Promise.resolve(true);
    },
    totalVideos: () => {
      return Promise.resolve(true);
    }
  };

  const categoryServiceStub = {
    getSelectedCategory: () => {
      return Promise.resolve(true);
    },
    setSelectedCategory: () => {
      return Promise.resolve(true);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: StateService, useValue: stateServiceStub},
        {provide: Transition, useValue: transitionStub},
        {provide: VideoService, userValue: videoServiceStub},
        {provide: CategoryService, userValue: categoryServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    stateService = TestBed.get(StateService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changePage', () => {
    spyOn(stateService, 'go').and.callThrough();
    component.changePage(2);
    fixture.detectChanges();
    expect(stateService.go).toHaveBeenCalled();
  });

});
