import {Component, OnInit} from '@angular/core';
import {Transition} from '@uirouter/angular/lib';
import {Category} from '../../../core/model/category/category';
import {CategoryService} from '../../../core/service/category/category.service';
import {VideoService} from '../../../core/service/video/video.service';
import {CommonService} from '../../../core/service/common/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public categoryList: Category[];
  public selectedCategory: Category;
  public navBarState: boolean;

  constructor(private categoryService: CategoryService, private videoService: VideoService,
              private commonService: CommonService, private transition: Transition) {
  }

  ngOnInit(): void {
    this.categoryService.categoryList.subscribe(categories => {
      this.categoryList = categories;
      this.selectCategory(this.categoryList[0]);
      // this.selectCategory(this.transition.params().category !== undefined ?
      //   this.transition.params().category : this.categoryList[0]);
    });
    this.commonService.navBarState.subscribe(navBarState => this.navBarState = navBarState);
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.categoryService.setSelectedCategory(category);
    this.videoService.updateVideoList(category, undefined, 1);
  }

  closeNav(): void {
    this.commonService.switchNavBarState(false);
  }

}
