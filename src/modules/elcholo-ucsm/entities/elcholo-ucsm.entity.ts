import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductEntity } from 'src/utils/product.entity';

export type elcholoProductDocument = HydratedDocument<ElcholoProduct>;

@Schema({ timestamps: true })
export class ElcholoProduct extends ProductEntity {
  @Prop({ default: 'El Cholo UCSM' })
  place: string;
}

export const ElcholoProductSchema =
  SchemaFactory.createForClass(ElcholoProduct);
