import { Module } from '@nestjs/common';
import { CeprobisUcsmService } from './ceprobis-ucsm.service';
import { CeprobisUcsmController } from './ceprobis-ucsm.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CeprobisProduct,
  CeprobisUcsmSchema,
} from './entities/ceprobis-ucsm.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CeprobisProduct.name, schema: CeprobisUcsmSchema },
    ]),
  ],
  controllers: [CeprobisUcsmController],
  providers: [CeprobisUcsmService],
})
export class CeprobisUcsmModule {}
