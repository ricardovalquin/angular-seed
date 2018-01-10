import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../core/model/category/category';
import {CategoryService} from '../../../core/service/category/category.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public categoryList: Category[];
  // @Input() currentPage: number;

  constructor (private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.categoryList.subscribe(categories => {
      this.categoryList = categories;
    });
  }

}
