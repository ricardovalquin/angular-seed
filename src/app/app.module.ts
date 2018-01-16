import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import { MomentModule } from 'angular2-moment';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';

import {uiRouterConfigFn} from './config/router.config';

import { AppComponent } from './app.component';
import {STATES} from './states/states';
import { DashboardComponent } from './states/dashboard/dashboard.component';
import { UsersComponent } from './states/users/users.component';
import { CoreModule } from './core/core.module';
import {CategoryResource} from './core/resource/category/category.resource';
import {CategoryService} from './core/service/category/category.service';
import { NavbarComponent } from './commons/helper/navbar/navbar.component';
import {VideoResource} from './core/resource/video/video.resource';
import {VideoService} from './core/service/video/video.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VideoDetailsComponent } from './states/video-details/video-details.component';
import { SearchComponent } from './commons/helper/search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchVideosComponent } from './states/search-videos/search-videos.component';
import {CommonService} from './core/service/common/common.service';
import { LoginComponent } from './states/login/login.component';
import { RegisterComponent } from './states/register/register.component';
import {AuthenticationService} from './core/service/authentication/authentication.service';

import { fakeBackendProvider } from './commons/helper/http-interceptor/http-interceptor';
import { AuthGuardService } from './core/service/guard/auth-guard.service';
import { JwtInterceptor } from './commons/helper/jwt-interceptor/jwt-interceptor';
import {UserService} from './core/service/user/user.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpLoaderFactory} from './config/http-translate-loader';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    NavbarComponent,
    VideoDetailsComponent,
    SearchComponent,
    SearchVideosComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn,
      otherwise: '/login'
    }),
    CoreModule,
    FormsModule,
    MomentModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: '#FFFFFF',
      primaryColour: '#3baac6',
      secondaryColour: '#3baac6',
      tertiaryColour: '#ffffff'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    CategoryResource,
    CategoryService,
    VideoResource,
    VideoService,
    CommonService,
    AuthGuardService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
