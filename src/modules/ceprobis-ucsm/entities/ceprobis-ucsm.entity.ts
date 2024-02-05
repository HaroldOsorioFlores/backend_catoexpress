import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductEntity } from 'src/utils/product.entity';

export type CeprobisUcsmDocument = HydratedDocument<CeprobisProduct>;
@Schema({ timestamps: true })
export class CeprobisProduct extends ProductEntity {
  @Prop({ default: 'Ceprobis UCSM' })
  place: string;
}
export const CeprobisUcsmSchema = SchemaFactory.createForClass(CeprobisProduct);
