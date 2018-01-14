import { TestBed, inject } from '@angular/core/testing';

import { CategoryResource } from './category.resource';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


fdescribe('CategoryResource', () => {

  let categoryResourceMock: CategoryResource;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryResource]
    });

    categoryResourceMock = TestBed.get(CategoryResource);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', inject([CategoryResource], (service: CategoryResource) => {
    expect(service).toBeTruthy();
  }));

  it('getCategories', () => {
    const response = {
      data: [{uri: 'vimeo/animation'}],
      total: 12};
    categoryResourceMock.getCategories().subscribe(categoriesResponse => {
      expect(categoriesResponse.length).toBeTruthy();
    });
    const req = httpMock.expectOne('https://api.vimeo.com/categories');
    expect(req.request.method).toBe('GET');
    req.flush(response);


  });
});
