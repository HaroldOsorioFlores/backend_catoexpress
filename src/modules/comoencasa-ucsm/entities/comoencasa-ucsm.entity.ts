import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from 'src/shared/common/base-product.entity';

export type ComoencasaUcsmDocument = HydratedDocument<ComoencasaProduct>;

@Schema()
export class ComoencasaProduct extends Product {
  @Prop({ default: 'Como en casa UCSM' })
  place: string;
}

export const ComoencasaProductSchema =
  SchemaFactory.createForClass(ComoencasaProduct);
