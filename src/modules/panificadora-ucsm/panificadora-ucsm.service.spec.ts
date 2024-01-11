import { Test, TestingModule } from '@nestjs/testing';
import { PanificadoraUcsmService } from './panificadora-ucsm.service';

describe('PanificadoraUcsmService', () => {
  let service: PanificadoraUcsmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PanificadoraUcsmService],
    }).compile();

    service = module.get<PanificadoraUcsmService>(PanificadoraUcsmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
