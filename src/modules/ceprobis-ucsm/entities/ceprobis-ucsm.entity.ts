import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from 'src/shared/common/base-product.entity';

export type CeprobisUcsmDocument = HydratedDocument<CeprobisProduct>;
@Schema()
export class CeprobisProduct extends Product {
  @Prop({ default: 'Ceprobis UCSM' })
  place: string;
}
export const CeprobisUcsmSchema = SchemaFactory.createForClass(CeprobisProduct);
