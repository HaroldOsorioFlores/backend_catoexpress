import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PanificadoraProductDocument = HydratedDocument<PanificadoraProduct>;
@Schema({ timestamps: true })
export class PanificadoraProduct {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  urlImage: string;

  @Prop()
  price: number;

  @Prop()
  public_id: string;

  @Prop({
    default: () => new Date(),
  })
  createdAt: Date;

  @Prop({
    default: () => new Date(),
  })
  updatedAt: Date;

  @Prop({ default: 'Panificadora UCSM' })
  place: string;
}
export const PanificadoraProductSchema =
  SchemaFactory.createForClass(PanificadoraProduct);
