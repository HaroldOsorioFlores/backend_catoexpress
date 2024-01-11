import { Test, TestingModule } from '@nestjs/testing';
import { ComoencasaUcsmService } from './comoencasa-ucsm.service';

describe('ComoencasaUcsmService', () => {
  let service: ComoencasaUcsmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComoencasaUcsmService],
    }).compile();

    service = module.get<ComoencasaUcsmService>(ComoencasaUcsmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
