import { Test, TestingModule } from '@nestjs/testing';
import { CeprobisUcsmController } from './ceprobis-ucsm.controller';
import { CeprobisUcsmService } from './ceprobis-ucsm.service';

describe('CeprobisUcsmController', () => {
  let controller: CeprobisUcsmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CeprobisUcsmController],
      providers: [CeprobisUcsmService],
    }).compile();

    controller = module.get<CeprobisUcsmController>(CeprobisUcsmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
