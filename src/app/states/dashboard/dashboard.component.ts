import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../core/model/category/category';
import {CategoryService} from '../../core/service/category/category.service';
import {Video} from '../../core/model/video/video';
import {Transition, StateService} from '@uirouter/angular/lib';
import {Subscription} from 'rxjs/Subscription';
import {VideoService} from '../../core/service/video/video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @Input() public categories: Category[];
  @Input() public selectedCategory: Category;
  @Input() public categoryVideos: Video[];
  private selectedCategorySubscriber: Subscription;
  public currentPage: number;

  constructor(private categoryService: CategoryService, private transition: Transition,
              private stateService: StateService, private videoService: VideoService) {}

  public changePage(page: number): void {
    this.currentPage = page;
    this.stateService.go('.', {page: page});
  }

  ngOnInit() {
    this.currentPage = this.transition.params().page;
    this.selectedCategorySubscriber = this.categoryService.getSelectedCategory().subscribe((category: Category) => {
      this.selectedCategory = category;
    });
    this.categoryService.setSelectedCategory(this.selectedCategory);
    this.videoService.getVideoList().subscribe((videos: Video[]) => {
      this.categoryVideos = videos;
    });
  }

  ngOnDestroy(): void {
    this.selectedCategorySubscriber.unsubscribe();
  }
}
