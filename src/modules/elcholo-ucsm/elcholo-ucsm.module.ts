import { Module } from '@nestjs/common';
import { ElcholoUcsmService } from './elcholo-ucsm.service';
import { ElcholoUcsmController } from './elcholo-ucsm.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ElcholoProduct,
  ElcholoProductSchema,
} from './entities/elcholo-ucsm.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ElcholoProduct.name, schema: ElcholoProductSchema },
    ]),
  ],
  controllers: [ElcholoUcsmController],
  providers: [ElcholoUcsmService],
})
export class ElcholoUcsmModule {}
