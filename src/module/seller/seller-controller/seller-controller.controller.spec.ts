import { Test, TestingModule } from '@nestjs/testing';
import { SellerControllerController } from './seller-controller.controller';

describe('SellerControllerController', () => {
  let controller: SellerControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerControllerController],
    }).compile();

    controller = module.get<SellerControllerController>(SellerControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
