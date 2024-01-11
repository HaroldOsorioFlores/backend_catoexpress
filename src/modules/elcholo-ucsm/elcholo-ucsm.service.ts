import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateElcholoUcsmDto } from './dto/create-elcholo-ucsm.dto';
import { UpdateElcholoUcsmDto } from './dto/update-elcholo-ucsm.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ElcholoProduct } from './entities/elcholo-ucsm.entity';
import { Model } from 'mongoose';

@Injectable()
export class ElcholoUcsmService {
  constructor(
    @InjectModel(ElcholoProduct.name)
    private readonly elCholoProduct: Model<ElcholoProduct>,
  ) {}
  async create(createElcholoUcsmDto: CreateElcholoUcsmDto): Promise<string> {
    const product = new this.elCholoProduct(createElcholoUcsmDto);
    product.save();
    return 'Product created successfully';
  }

  async findAll(): Promise<ElcholoProduct[]> {
    return await this.elCholoProduct.find().sort({ _id: -1 }).exec();
  }

  async findOne(id: string): Promise<ElcholoProduct> {
    const productSearch = await this.elCholoProduct.findById(id);
    if (!productSearch) {
      throw new NotFoundException('Product not found');
    }
    return productSearch;
  }

  async update(
    id: string,
    updateElcholoUcsmDto: UpdateElcholoUcsmDto,
  ): Promise<string> {
    const productUpdate = await this.elCholoProduct.findByIdAndUpdate(
      id,
      updateElcholoUcsmDto,
      { new: true },
    );
    if (!productUpdate) {
      throw new NotFoundException('Product not found');
    }
    return 'Product update successfully';
  }

  async remove(id: string): Promise<string> {
    const productRemove = await this.elCholoProduct.findByIdAndDelete(id);
    if (!productRemove) {
      throw new NotFoundException('Product not found');
    }
    return `Product remove successfully`;
  }
}
