import { Module } from '@nestjs/common';
import { ComoencasaUcsmService } from './comoencasa-ucsm.service';
import { ComoencasaUcsmController } from './comoencasa-ucsm.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ComoencasaProduct,
  ComoencasaProductSchema,
} from './entities/comoencasa-ucsm.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ComoencasaProduct.name, schema: ComoencasaProductSchema },
    ]),
  ],
  controllers: [ComoencasaUcsmController],
  providers: [ComoencasaUcsmService],
})
export class ComoencasaUcsmModule {}
