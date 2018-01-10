import {Injectable} from '@angular/core';
import {Category} from '../../model/category/category';
import {CategoryResource} from '../../resource/category/category.resource';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CategoryService {

  private _categoryList: Observable<Category[]>;
  private _selectedCategory: Subject<Category>;

  constructor(private categoryResource: CategoryResource) {
    this._selectedCategory = new Subject();
  }

  get categoryList(): Observable<Category[]> {
    if (!this._categoryList) {
      this._categoryList = this.categoryResource.getCategories();
      return this._categoryList;
    } else {
      return this._categoryList;
    }
  }

  getSelectedCategory(): Subject<Category> {
    return this._selectedCategory;
  }

  setSelectedCategory(value: Category) {
    this._selectedCategory.next(value);
  }

}
