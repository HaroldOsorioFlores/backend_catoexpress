import { Test, TestingModule } from '@nestjs/testing';
import { ComoencasaUcsmController } from './comoencasa-ucsm.controller';
import { ComoencasaUcsmService } from './comoencasa-ucsm.service';

describe('ComoencasaUcsmController', () => {
  let controller: ComoencasaUcsmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComoencasaUcsmController],
      providers: [ComoencasaUcsmService],
    }).compile();

    controller = module.get<ComoencasaUcsmController>(ComoencasaUcsmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
