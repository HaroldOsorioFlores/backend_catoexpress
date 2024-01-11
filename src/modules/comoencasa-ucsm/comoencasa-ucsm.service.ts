import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComoencasaUcsmDto } from './dto/create-comoencasa-ucsm.dto';
import { UpdateComoencasaUcsmDto } from './dto/update-comoencasa-ucsm.dto';
import { ComoencasaProduct } from './entities/comoencasa-ucsm.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ComoencasaUcsmService {
  constructor(
    @InjectModel(ComoencasaProduct.name)
    private readonly comoencasaProduct: Model<ComoencasaProduct>,
  ) {}
  async create(
    createComoencasaUcsmDto: CreateComoencasaUcsmDto,
  ): Promise<string> {
    const product = new this.comoencasaProduct(createComoencasaUcsmDto);
    product.save();
    return 'Product created successfully';
  }

  async findAll(): Promise<ComoencasaProduct[]> {
    return await this.comoencasaProduct.find().sort({ _id: -1 }).exec();
  }

  async findOne(id: string): Promise<ComoencasaProduct> {
    const searchProduct: ComoencasaProduct =
      await this.comoencasaProduct.findById(id);

    if (!searchProduct) {
      throw new NotFoundException('No exist that ID');
    }
    return searchProduct;
  }

  async update(
    id: string,
    updateComoencasaUcsmDto: UpdateComoencasaUcsmDto,
  ): Promise<string> {
    const productUpdate: ComoencasaProduct =
      await this.comoencasaProduct.findByIdAndUpdate(
        id,
        updateComoencasaUcsmDto,
        { new: true },
      );
    if (!productUpdate) {
      throw new NotFoundException('No exist that ID');
    }
    return 'Product update successfully';
  }

  async remove(id: string): Promise<string> {
    const productRemove = await this.comoencasaProduct.findByIdAndDelete(id);
    if (!productRemove) {
      throw new NotFoundException('No exist that ID');
    }
    return `Product deleted successfully`;
  }
}
