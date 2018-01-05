import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../core/model/category/category';
import {CategoryService} from '../../core/service/category/category.service';
import {Video} from '../../core/model/video/video';
import {VideoService} from '../../core/service/video/video.service';
import {Transition} from '@uirouter/angular/lib';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @Input() public categories: Category[];
  @Input() public selectedCategory: Category;
  public categoryVideos: Video[];
  public currentPage: number;
  private selectedCategorySubscriber: Subscription;

  constructor(private categoryService: CategoryService, private videoService: VideoService,
              private transition: Transition) {}

  public changePage(page: number): void {
    this.currentPage = page;
    this.videoService.getVideosByCategory(this.selectedCategory, page);
  }

  ngOnInit() {
    this.currentPage = this.transition.params().page;
    this.selectedCategorySubscriber = this.categoryService.selectedCategory.subscribe((category: Category) => {
      this.selectedCategory = category;
      this.videoService.getVideosByCategory(category).subscribe((videoList: Video[]) => {
        console.log(videoList);
        this.categoryVideos = videoList;
        });
    });
    this.categoryService.setSelectedCategory(this.selectedCategory);
  }

  ngOnDestroy(): void {
    this.selectedCategorySubscriber.unsubscribe();
  }
}
