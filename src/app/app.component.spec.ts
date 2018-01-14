import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TranslateService} from '@ngx-translate/core';

fdescribe('AppComponent', () => {

  const translateServiceStub = {
    addLangs: () => true,
    setDefaultLang: () => true,
    use: () => true,
    getBrowserLang: () => {
      return {match: () => true};
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [ {provide: TranslateService, useValue: translateServiceStub} ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
