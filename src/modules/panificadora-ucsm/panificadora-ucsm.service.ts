import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePanificadoraUcsmDto } from './dto/create-panificadora-ucsm.dto';
import { UpdatePanificadoraUcsmDto } from './dto/update-panificadora-ucsm.dto';
import { PanificadoraProduct } from './entities/panificadora-ucsm.entity';

@Injectable()
export class PanificadoraUcsmService {
  constructor(
    @InjectModel(PanificadoraProduct.name)
    private readonly panificadoraProduct: Model<PanificadoraProduct>,
  ) {}
  async create(
    createPanificadoraUcsmDto: CreatePanificadoraUcsmDto,
  ): Promise<string> {
    const product = new this.panificadoraProduct(createPanificadoraUcsmDto);
    product.save();
    return 'Product created successfully';
  }

  async findAll(): Promise<PanificadoraProduct[]> {
    return await this.panificadoraProduct.find().sort({ _id: -1 }).exec();
  }

  async findOne(id: string): Promise<PanificadoraProduct> {
    const productSearch: PanificadoraProduct = await this.panificadoraProduct
      .findById(id)
      .exec();
    if (!productSearch) {
      throw new NotFoundException('Product not found');
    }
    return productSearch;
  }

  async update(
    id: string,
    updatePanificadoraUcsmDto: UpdatePanificadoraUcsmDto,
  ): Promise<string> {
    const productUpdate: PanificadoraProduct =
      await this.panificadoraProduct.findByIdAndUpdate(
        id,
        updatePanificadoraUcsmDto,
        { new: true },
      );

    if (!productUpdate) {
      throw new NotFoundException('Product not found');
    }

    return `Product updated successfully`;
  }

  async remove(id: string): Promise<string> {
    const productRemove = await this.panificadoraProduct.findByIdAndDelete(id);
    if (!productRemove) {
      throw new NotFoundException('Product not found');
    }
    return `Product removed successfully`;
  }
}
