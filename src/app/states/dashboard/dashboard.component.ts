import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../core/model/category/category';
import {CategoryService} from '../../core/service/category/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() public categories: Category[];
  public selectedCategory: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.selectedCategory.subscribe((category) => {
      if (!category.id && this.categories) {
        this.categoryService.setSelectedCategory(this.categories[0]);
      } else {
        this.selectedCategory = category;
      }
    });
  }

}
