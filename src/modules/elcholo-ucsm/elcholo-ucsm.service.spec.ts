import { Test, TestingModule } from '@nestjs/testing';
import { ElcholoUcsmService } from './elcholo-ucsm.service';

describe('ElcholoUcsmService', () => {
  let service: ElcholoUcsmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElcholoUcsmService],
    }).compile();

    service = module.get<ElcholoUcsmService>(ElcholoUcsmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
