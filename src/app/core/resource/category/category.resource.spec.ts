import { TestBed, inject } from '@angular/core/testing';

import { CategoryResource } from './category.resource';

describe('CategoryResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryResource]
    });
  });

  it('should be created', inject([CategoryResource], (service: CategoryResource) => {
    expect(service).toBeTruthy();
  }));
});
