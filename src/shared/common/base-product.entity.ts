import { Prop, Schema } from '@nestjs/mongoose';

Schema({ timestamps: true });
export class Product {
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
}
