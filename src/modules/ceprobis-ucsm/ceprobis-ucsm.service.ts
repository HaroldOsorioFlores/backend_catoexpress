import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCeprobisUcsmDto } from './dto/create-ceprobis-ucsm.dto';
import { UpdateCeprobisUcsmDto } from './dto/update-ceprobis-ucsm.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CeprobisProduct } from './entities/ceprobis-ucsm.entity';

@Injectable()
export class CeprobisUcsmService {
  constructor(
    @InjectModel(CeprobisProduct.name)
    private readonly ceprobisProduct: Model<CeprobisProduct>,
  ) {}
  async create(createCeprobisUcsmDto: CreateCeprobisUcsmDto): Promise<string> {
    const productNew = new this.ceprobisProduct(createCeprobisUcsmDto);

    productNew.save();
    return 'The product has been created successfully';
  }

  async findAll(): Promise<CeprobisProduct[]> {
    return await this.ceprobisProduct.find().sort({ _id: -1 }).exec();
  }

  async findOne(id: string): Promise<CeprobisProduct> {
    if (id.length !== 24) {
      {
        throw new NotFoundException('Is not correct ID');
      }
    }

    const searchProduct: CeprobisProduct = await this.ceprobisProduct
      .findById(id)
      .exec();

    if (!searchProduct) {
      throw new NotFoundException(`Could not find product ${id}`);
    }
    return searchProduct;
  }

  async update(
    id: string,
    updateCeprobisUcsmDto: UpdateCeprobisUcsmDto,
  ): Promise<string> {
    const product: CeprobisProduct = await this.ceprobisProduct
      .findByIdAndUpdate(id, updateCeprobisUcsmDto, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return 'The product to been updated successfully';
  }

  async remove(id: string): Promise<string> {
    const product = await this.ceprobisProduct.findByIdAndDelete(id).exec();
    if (!product) {
      throw new NotFoundException(`The product ${id} not found`);
    }
    return 'The product to been deleted successfully';
  }
}
