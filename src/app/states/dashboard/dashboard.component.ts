import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video';
import {Transition, StateService} from '@uirouter/angular/lib';
import {Subscription} from 'rxjs/Subscription';
import {VideoService} from '../../core/service/video/video.service';
import {Category} from '../../core/model/category/category';
import {CategoryService} from '../../core/service/category/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @Input() public selectedCategory: Category;
  public totalVideos: number;
  public categoryVideos: Video[];
  public currentPage: number;
  private selectedCategorySubscriber: Subscription;
  private videoListSubscriber: Subscription;

  constructor(private transition: Transition, private stateService: StateService,
              private videoService: VideoService, private categoryService: CategoryService) {}

  public changePage(page: number): void {
    this.currentPage = page;
    this.videoService.updateVideoList(this.selectedCategory, undefined, page);
    this.stateService.go('.', {category: this.selectedCategory.id, page: page});
  }

  ngOnInit() {
    this.totalVideos = 0;
    this.currentPage = this.transition.params().page;
    this.videoListSubscriber = this.videoService.videoList.subscribe((videos: Video[]) => {
      this.categoryVideos = videos;
    });
    this.videoService.totalVideos.subscribe(totalVideos => {
      this.totalVideos = totalVideos;
    });
    this.selectedCategorySubscriber = this.categoryService.getSelectedCategory()
      .subscribe((category: Category) => {
        this.selectedCategory = category;
        this.currentPage = 1;
      });
    this.categoryService.setSelectedCategory(this.selectedCategory);
  }

  ngOnDestroy(): void {
    this.videoListSubscriber.unsubscribe();
    this.selectedCategorySubscriber.unsubscribe();
  }
}
