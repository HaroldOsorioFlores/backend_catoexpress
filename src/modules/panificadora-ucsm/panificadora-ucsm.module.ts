import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PanificadoraUcsmService } from './panificadora-ucsm.service';
import { PanificadoraUcsmController } from './panificadora-ucsm.controller';
import {
  PanificadoraProduct,
  PanificadoraProductSchema,
} from './entities/panificadora-ucsm.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PanificadoraProduct.name, schema: PanificadoraProductSchema },
    ]),
  ],
  controllers: [PanificadoraUcsmController],
  providers: [PanificadoraUcsmService],
})
export class PanificadoraUcsmModule {}
