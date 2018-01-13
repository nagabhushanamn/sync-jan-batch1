import { TestBed, inject } from '@angular/core/testing';

import { ProductsResolverService } from './products-resolver.service';

describe('ProductResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsResolverService]
    });
  });

  it('should be created', inject([ProductsResolverService], (service: ProductResolverService) => {
    expect(service).toBeTruthy();
  }));
});
