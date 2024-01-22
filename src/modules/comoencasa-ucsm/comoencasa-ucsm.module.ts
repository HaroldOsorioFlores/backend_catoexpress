import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ComoencasaUcsmService } from './comoencasa-ucsm.service';
import { ComoencasaUcsmController } from './comoencasa-ucsm.controller';
import {
  ComoencasaProduct,
  ComoencasaProductSchema,
} from './entities/comoencasa-ucsm.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ComoencasaProduct.name, schema: ComoencasaProductSchema },
    ]),
  ],
  controllers: [ComoencasaUcsmController],
  providers: [ComoencasaUcsmService, CloudinaryService],
})
export class ComoencasaUcsmModule {}
