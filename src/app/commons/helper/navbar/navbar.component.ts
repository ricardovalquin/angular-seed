import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../core/model/category/category';
import {CategoryService} from '../../../core/service/category/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() categoryList: Category[];
  @Input() selectedCategory: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.selectedCategory.subscribe(
      (category) => {
        this.selectedCategory = category;
      }
    );
  }

  public changeCategory (category: Category): void {
    this.categoryService.setSelectedCategory(category);
  }

}
