import { Injectable } from '@angular/core';
import {Category} from '../../model/category/category';
import {CategoryResource} from '../../resource/category/category.resource';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CategoryService {

  private _categoryList: Observable<Category[]>;
  private _selectedCategory: BehaviorSubject<Category>;

  constructor(private categoryResource: CategoryResource) {
    this._selectedCategory = new BehaviorSubject(new Category());
  }

  get categoryList(): Observable<Category[]> {
    if (!this._categoryList) {
      this._categoryList = this.categoryResource.getCategories();
      return this._categoryList;
    }else {
      return this._categoryList;
    }
  }

  get selectedCategory(): BehaviorSubject<Category> {
    return this._selectedCategory;
  }

  setSelectedCategory(value: Category) {
    this._selectedCategory.next(value);
  }

}
