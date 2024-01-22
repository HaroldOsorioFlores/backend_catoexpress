import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ElcholoUcsmService } from './elcholo-ucsm.service';
import { ElcholoUcsmController } from './elcholo-ucsm.controller';
import {
  ElcholoProduct,
  ElcholoProductSchema,
} from './entities/elcholo-ucsm.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ElcholoProduct.name, schema: ElcholoProductSchema },
    ]),
  ],
  controllers: [ElcholoUcsmController],
  providers: [ElcholoUcsmService, CloudinaryService],
})
export class ElcholoUcsmModule {}
