import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CeprobisUcsmDocument = HydratedDocument<CeprobisProduct>;
@Schema({ timestamps: true })
export class CeprobisProduct {
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
  @Prop({ default: 'Ceprobis UCSM' })
  place: string;
}
export const CeprobisUcsmSchema = SchemaFactory.createForClass(CeprobisProduct);
