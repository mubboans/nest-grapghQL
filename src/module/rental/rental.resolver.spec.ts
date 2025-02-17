import { Test, TestingModule } from '@nestjs/testing';
import { RentalResolver } from './rental.resolver';
import { RentalService } from './rental.service';

describe('RentalResolver', () => {
  let resolver: RentalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalResolver, RentalService],
    }).compile();

    resolver = module.get<RentalResolver>(RentalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
