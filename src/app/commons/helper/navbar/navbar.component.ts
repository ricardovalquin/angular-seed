import {Component, OnInit} from '@angular/core';
import {Category} from '../../../core/model/category/category';
import {CategoryService} from '../../../core/service/category/category.service';
import {VideoService} from '../../../core/service/video/video.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public categoryList: Category[];
  public selectedCategory: Category;

  constructor(private categoryService: CategoryService, private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.categoryService.categoryList.subscribe(categories => {
      this.categoryList = categories;
      this.selectCategory(this.categoryList[0]);
    });
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryService.setSelectedCategory(category);
    this.videoService.updateVideoList(category, undefined, 1);
  }

}
