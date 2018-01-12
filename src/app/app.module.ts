import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {uiRouterConfigFn} from './config/router.config';

import { AppComponent } from './app.component';
import {STATES} from './states/states';
import { DashboardComponent } from './states/dashboard/dashboard.component';
import { UsersComponent } from './states/users/users.component';
import { CoreModule } from './core/core.module';
import {CategoryResource} from './core/resource/category/category.resource';
import {HttpClientModule} from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    NavbarComponent,
    VideoDetailsComponent,
    SearchComponent,
    SearchVideosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn,
      otherwise: '/home/animation?page=1'
    }),
    CoreModule,
    FormsModule
  ],
  providers: [
    CategoryResource,
    CategoryService,
    VideoResource,
    VideoService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
