import { Test, TestingModule } from '@nestjs/testing';
import { CeprobisUcsmService } from './ceprobis-ucsm.service';

describe('CeprobisUcsmService', () => {
  let service: CeprobisUcsmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CeprobisUcsmService],
    }).compile();

    service = module.get<CeprobisUcsmService>(CeprobisUcsmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
