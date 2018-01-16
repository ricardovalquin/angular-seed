import { TestBed, inject } from '@angular/core/testing';

import { CategoryService } from './category.service';
import {CategoryResource} from '../../resource/category/category.resource';
import {of} from 'rxjs/observable/of';

describe('CategoryService', () => {
  let categoryServiceMock: CategoryService;
  let categoryResourceMock: CategoryResource;

  const categoryResourceStub = {
    getCategories: () => {
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService,  {provide: CategoryResource, useValue: categoryResourceStub}]
    });

    categoryServiceMock = TestBed.get(CategoryService);
    categoryResourceMock = TestBed.get(CategoryResource);
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));

  it('categoryList', () => {
    const categoryListResponse = [{name: 'animation'}];
    spyOn(categoryResourceMock, 'getCategories').and.returnValue(of(categoryListResponse));
    categoryServiceMock.categoryList.subscribe(categories => categories);
    expect(categoryResourceMock.getCategories).toHaveBeenCalled();
  });

  it('getSelectedCategory', () => {
    categoryServiceMock.getSelectedCategory().subscribe(selectedCategory => {
      expect(selectedCategory).toBeTruthy();
    });
  });

});
