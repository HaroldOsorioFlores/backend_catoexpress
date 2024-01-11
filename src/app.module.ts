import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CeprobisUcsmModule } from './modules/ceprobis-ucsm/ceprobis-ucsm.module';
import { ComoencasaUcsmModule } from './modules/comoencasa-ucsm/comoencasa-ucsm.module';
import { ElcholoUcsmModule } from './modules/elcholo-ucsm/elcholo-ucsm.module';
import { PanificadoraUcsmModule } from './modules/panificadora-ucsm/panificadora-ucsm.module';

@Module({
  imports: [
    CeprobisUcsmModule,
    ComoencasaUcsmModule,
    ElcholoUcsmModule,
    PanificadoraUcsmModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
})
export class AppModule {}
