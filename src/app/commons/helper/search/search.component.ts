import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../../core/service/video/video.service';
import {Transition, StateService} from '@uirouter/angular/lib';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchQuery: string;

  constructor(private videoService: VideoService, private stateService: StateService) { }

  ngOnInit() {}

  search(query: string): void {
    this.videoService.updateVideoList(undefined, query);
    this.stateService.go('app.search', {term: query, page: 1});
  }

}
