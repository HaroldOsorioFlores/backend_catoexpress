import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type elcholoProductDocument = HydratedDocument<ElcholoProduct>;

@Schema({ timestamps: true })
export class ElcholoProduct {
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
  @Prop({ default: 'El Cholo UCSM' })
  place: string;
}

export const ElcholoProductSchema =
  SchemaFactory.createForClass(ElcholoProduct);
