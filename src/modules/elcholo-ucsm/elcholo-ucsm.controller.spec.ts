import { Test, TestingModule } from '@nestjs/testing';
import { ElcholoUcsmController } from './elcholo-ucsm.controller';
import { ElcholoUcsmService } from './elcholo-ucsm.service';

describe('ElcholoUcsmController', () => {
  let controller: ElcholoUcsmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElcholoUcsmController],
      providers: [ElcholoUcsmService],
    }).compile();

    controller = module.get<ElcholoUcsmController>(ElcholoUcsmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
