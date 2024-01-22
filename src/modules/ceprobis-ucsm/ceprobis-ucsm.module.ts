import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CeprobisUcsmService } from './ceprobis-ucsm.service';
import { CeprobisUcsmController } from './ceprobis-ucsm.controller';
import {
  CeprobisProduct,
  CeprobisUcsmSchema,
} from './entities/ceprobis-ucsm.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CeprobisProduct.name, schema: CeprobisUcsmSchema },
    ]),
  ],
  controllers: [CeprobisUcsmController],
  providers: [CeprobisUcsmService, CloudinaryService],
})
export class CeprobisUcsmModule {}
