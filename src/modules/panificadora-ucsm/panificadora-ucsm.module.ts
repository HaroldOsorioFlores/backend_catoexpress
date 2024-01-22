import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PanificadoraUcsmService } from './panificadora-ucsm.service';
import { PanificadoraUcsmController } from './panificadora-ucsm.controller';
import {
  PanificadoraProduct,
  PanificadoraProductSchema,
} from './entities/panificadora-ucsm.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PanificadoraProduct.name, schema: PanificadoraProductSchema },
    ]),
  ],
  controllers: [PanificadoraUcsmController],
  providers: [PanificadoraUcsmService, CloudinaryService],
})
export class PanificadoraUcsmModule {}
