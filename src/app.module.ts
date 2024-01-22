import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CeprobisUcsmModule } from './modules/ceprobis-ucsm/ceprobis-ucsm.module';
import { ComoencasaUcsmModule } from './modules/comoencasa-ucsm/comoencasa-ucsm.module';
import { ElcholoUcsmModule } from './modules/elcholo-ucsm/elcholo-ucsm.module';
import { PanificadoraUcsmModule } from './modules/panificadora-ucsm/panificadora-ucsm.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';

@Module({
  imports: [
    CeprobisUcsmModule,
    ComoencasaUcsmModule,
    ElcholoUcsmModule,
    PanificadoraUcsmModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.MONGO_URL_NESTJS }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    CloudinaryModule,
  ],
})
export class AppModule {}
