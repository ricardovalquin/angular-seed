import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Transition, StateService} from '@uirouter/angular/lib';

import { DashboardComponent } from './dashboard.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {VideoService} from '../../core/service/video/video.service';
import {CategoryService} from '../../core/service/category/category.service';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let stateService: StateService;

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };

  const transitionStub = {
    params: () => {
      return {category: 'animation', page: '1'};
    }
  };
  const videoServiceStub = {
    updateVideoList: () => {
      return true;
    },
    videoList: () => {
      return true;
    },
    totalVideos: () => {
      return true;
    }
  };

  const categoryServiceStub = {
    getSelectedCategory: () => {
      return Promise.resolve();
    },
    setSelectedCategory: () => {
      return Promise.resolve();
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
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
