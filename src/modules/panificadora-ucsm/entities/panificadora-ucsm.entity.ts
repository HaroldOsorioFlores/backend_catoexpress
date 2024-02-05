import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductEntity } from 'src/utils/product.entity';

export type PanificadoraProductDocument = HydratedDocument<PanificadoraProduct>;
@Schema({ timestamps: true })
export class PanificadoraProduct extends ProductEntity {
  @Prop({ default: 'Panificadora UCSM' })
  place: string;
}
export const PanificadoraProductSchema =
  SchemaFactory.createForClass(PanificadoraProduct);
