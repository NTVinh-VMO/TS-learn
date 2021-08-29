import { Test, TestingModule } from '@nestjs/testing';
import { SellerServiceService } from './seller-service.service';

describe('SellerServiceService', () => {
  let service: SellerServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerServiceService],
    }).compile();

    service = module.get<SellerServiceService>(SellerServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
