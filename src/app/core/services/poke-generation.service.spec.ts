import { TestBed } from '@angular/core/testing';

import { PokeGenerationService } from './poke-generation.service';

describe('PokeGenerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeGenerationService = TestBed.get(PokeGenerationService);
    expect(service).toBeTruthy();
  });
});
