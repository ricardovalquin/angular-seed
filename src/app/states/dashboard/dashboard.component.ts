import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../core/model/category/category';
import {CategoryService} from '../../core/service/category/category.service';
import {Video} from '../../core/model/video/video';
import {Transition, StateService} from '@uirouter/angular/lib';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @Input() public categories: Category[];
  @Input() public selectedCategory: Category;
  @Input() public categoryVideos: Video[];
  public currentPage: number;
  public totalVideos: number;
  private selectedCategorySubscriber: Subscription;

  constructor(private categoryService: CategoryService, private transition: Transition,
              private stateService: StateService) {}

  public changePage(page: number): void {
    this.currentPage = page;
    this.stateService.go('.', {page: page});
  }

  ngOnInit() {
    this.currentPage = this.transition.params().page;
    this.selectedCategorySubscriber = this.categoryService.selectedCategory.subscribe((category: Category) => {
      this.selectedCategory = category;
    });
    this.categoryService.setSelectedCategory(this.selectedCategory);
  }

  ngOnDestroy(): void {
    this.selectedCategorySubscriber.unsubscribe();
  }
}
