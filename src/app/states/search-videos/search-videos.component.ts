import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Video} from '../../core/model/video/video';
import {VideoService} from '../../core/service/video/video.service';
import {Transition, StateService} from '@uirouter/angular/lib';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.scss']
})
export class SearchVideosComponent implements OnInit, OnDestroy {

  public searchTerm: string;
  public totalVideos: number;
  public categoryVideos: Video[];
  public currentPage: number;
  private videoListSubscriber: Subscription;

  public changePage(page: number): void {
    this.currentPage = page;
    this.videoService.updateVideoList(undefined, this.searchTerm, page);
    // this.stateService.go('.', {category: this.selectedCategory.id, page: page});
  }

  constructor(private videoService: VideoService, private transition: Transition) { }

  ngOnInit() {
    this.totalVideos = 0;
    this.currentPage = this.transition.params().page;
    this.searchTerm = this.transition.params().term;
    this.videoListSubscriber = this.videoService.videoList.subscribe((videos: Video[]) => {
      this.categoryVideos = videos;
    });
    this.videoService.totalVideos.subscribe(videos => {
      this.totalVideos = videos;
    });
  }

  ngOnDestroy(): void {
    this.videoListSubscriber.unsubscribe();
  }

}
