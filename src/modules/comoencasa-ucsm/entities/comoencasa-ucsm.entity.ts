import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ComoencasaUcsmDocument = HydratedDocument<ComoencasaProduct>;

@Schema({ timestamps: true })
export class ComoencasaProduct {
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
  @Prop({ default: 'Como en casa UCSM' })
  place: string;
}

export const ComoencasaProductSchema =
  SchemaFactory.createForClass(ComoencasaProduct);
