import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Product } from 'src/shared/common/base-product.entity';

export type PanificadoraProductDocument = HydratedDocument<PanificadoraProduct>;
@Schema()
export class PanificadoraProduct extends Product {
  @Prop({ default: 'Panificadora UCSM' })
  place: string;
}
export const PanificadoraProductSchema =
  SchemaFactory.createForClass(PanificadoraProduct);
