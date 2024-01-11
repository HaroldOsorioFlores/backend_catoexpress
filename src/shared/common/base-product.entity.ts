import { Prop } from '@nestjs/mongoose';

export class Product {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  urlImage: string;

  @Prop()
  price: number;

  @Prop({ default: new Date().toLocaleString('PET') })
  createdAt: string;

  @Prop({ default: new Date().toLocaleString('PET') })
  updateAt: string;
}
