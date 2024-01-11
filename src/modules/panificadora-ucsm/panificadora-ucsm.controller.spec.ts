import { Test, TestingModule } from '@nestjs/testing';
import { PanificadoraUcsmController } from './panificadora-ucsm.controller';
import { PanificadoraUcsmService } from './panificadora-ucsm.service';

describe('PanificadoraUcsmController', () => {
  let controller: PanificadoraUcsmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PanificadoraUcsmController],
      providers: [PanificadoraUcsmService],
    }).compile();

    controller = module.get<PanificadoraUcsmController>(PanificadoraUcsmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
