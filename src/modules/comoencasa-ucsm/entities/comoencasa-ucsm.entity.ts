import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductEntity } from 'src/utils/product.entity';

export type ComoencasaUcsmDocument = HydratedDocument<ComoencasaProduct>;

@Schema({ timestamps: true })
export class ComoencasaProduct extends ProductEntity {
  @Prop({ default: 'Como en casa UCSM' })
  place: string;
}

export const ComoencasaProductSchema =
  SchemaFactory.createForClass(ComoencasaProduct);
