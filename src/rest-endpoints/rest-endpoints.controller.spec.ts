import { Test, TestingModule } from '@nestjs/testing';
import { RestEndpointsController } from './rest-endpoints.controller';

describe('RestEndpointsController', () => {
  let controller: RestEndpointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestEndpointsController],
    }).compile();

    controller = module.get<RestEndpointsController>(RestEndpointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
