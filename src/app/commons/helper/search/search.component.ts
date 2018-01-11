import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../../core/service/video/video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchQuery: string;

  constructor(private videoService: VideoService) { }

  ngOnInit() {}

  search(query: string): void {
    this.videoService.getVideoList(undefined, query);
  }

}
