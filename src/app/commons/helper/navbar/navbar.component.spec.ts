import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { NavbarComponent } from './navbar.component';
import {UIRouterModule} from '@uirouter/angular';
import {TranslateModule} from '@ngx-translate/core';
import {APP_BASE_HREF} from '@angular/common';
import {Transition} from '@uirouter/angular/lib';
import {CategoryService} from '../../../core/service/category/category.service';
import {VideoService} from '../../../core/service/video/video.service';
import {CommonService} from '../../../core/service/common/common.service';
import {AuthenticationService} from '../../../core/service/authentication/authentication.service';
import {StateService} from '@uirouter/core/lib';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

xdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  // let stateService: StateService;
  let categoryService: CategoryService;
  let videoService: VideoService;
  let commonService: CommonService;
  let transition: Transition;
  let authenticationService: AuthenticationService;

  const categoryServiceStub = {
    categoryList: () => {
      return Observable.of([]);
    },
    setSelectedCategory: () => {},
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
  const transitionStub = {};
  const authenticationServiceStub = {
    logout: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: CategoryService, userValue: categoryServiceStub},
        {provide: VideoService, userValue: videoServiceStub},
        {provide: CommonService, userValue: commonServiceStub},
        {provide: Transition, useValue: transitionStub},
        {provide: AuthenticationService, useValue: authenticationServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    // stateService = fixture.debugElement.injector.get(StateService);
    categoryService = fixture.debugElement.injector.get(CategoryService);
    videoService = fixture.debugElement.injector.get(VideoService);
    commonService = fixture.debugElement.injector.get(CommonService);
    transition = fixture.debugElement.injector.get(Transition);
    authenticationService = fixture.debugElement.injector.get(AuthenticationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
