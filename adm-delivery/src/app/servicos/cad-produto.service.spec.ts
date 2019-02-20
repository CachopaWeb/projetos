import { TestBed } from '@angular/core/testing';

import { CadProdutoService } from './cad-produto.service';

describe('CadProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadProdutoService = TestBed.get(CadProdutoService);
    expect(service).toBeTruthy();
  });
});
