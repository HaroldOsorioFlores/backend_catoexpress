import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from 'src/shared/common/base-product.entity';

export type elcholoProductDocument = HydratedDocument<ElcholoProduct>;

@Schema()
export class ElcholoProduct extends Product {
  @Prop({ default: 'El Cholo UCSM' })
  place: string;
}

export const ElcholoProductSchema =
  SchemaFactory.createForClass(ElcholoProduct);
