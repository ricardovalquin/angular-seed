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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn
    }),
    CoreModule
  ],
  providers: [
    CategoryResource,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
