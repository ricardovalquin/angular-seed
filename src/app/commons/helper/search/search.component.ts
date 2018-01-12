import { Component, OnInit } from '@angular/core';
import {StateService} from '@uirouter/angular/lib';
import {VideoService} from '../../../core/service/video/video.service';
import {CommonService} from '../../../core/service/common/common.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchQuery: string;
  public navBarState: boolean;

  constructor(private videoService: VideoService, private stateService: StateService,
              private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.navBarState.subscribe(navBarState => this.navBarState = navBarState);
    this.commonService.switchNavBarState(false); // missing query validator
  }

  search(query: string): void {
    this.videoService.updateVideoList(undefined, query);
    this.stateService.go('app.search', {term: query, page: 1});
  }

  showNavBar(): void {
    this.commonService.switchNavBarState(true);
  }

}
