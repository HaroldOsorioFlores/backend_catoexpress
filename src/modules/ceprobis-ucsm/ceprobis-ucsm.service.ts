import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCeprobisUcsmDto } from './dto/create-ceprobis-ucsm.dto';
import { UpdateCeprobisUcsmDto } from './dto/update-ceprobis-ucsm.dto';
import { CeprobisProduct } from './entities/ceprobis-ucsm.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CloudinaryResponse } from '../cloudinary/cloudinary-response';
import { ImageProduct } from 'src/utils/models/image.model';

@Injectable()
export class CeprobisUcsmService {
  constructor(
    @InjectModel(CeprobisProduct.name)
    private readonly ceprobisProduct: Model<CeprobisProduct>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(
    createCeprobisUcsmDto: CreateCeprobisUcsmDto,
    file: Express.Multer.File,
  ): Promise<string> {
    const image: CloudinaryResponse =
      await this.cloudinaryService.uploadFile(file);
    const product = new this.ceprobisProduct({
      ...createCeprobisUcsmDto,
      urlImage: image.secure_url,
      public_id: image.public_id,
    });

    product.save();
    return 'The product has been created successfully';
  }

  async findAll(): Promise<CeprobisProduct[]> {
    return await this.ceprobisProduct.find().sort({ _id: -1 }).exec();
  }

  async findOne(id: string): Promise<CeprobisProduct> {
    const searchProduct: CeprobisProduct = await this.ceprobisProduct
      .findById(id)
      .exec();

    if (!searchProduct) {
      throw new NotFoundException(`Not found product`);
    }
    return searchProduct;
  }

  async update(
    id: string,
    updateCeprobisUcsmDto: UpdateCeprobisUcsmDto,
    file: Express.Multer.File,
  ): Promise<string> {
    const product: CeprobisProduct = await this.findOne(id);
    const image: ImageProduct = await this.cloudinaryService.updateFile(
      product,
      file,
    );
    console.log('Imagen: ', image);
    await this.ceprobisProduct
      .findByIdAndUpdate(
        id,
        {
          ...updateCeprobisUcsmDto,
          ...image,
          updatedAt: new Date(),
        },
        { new: true },
      )
      .exec();
    return 'The product to been updated successfully';
  }

  async remove(id: string): Promise<string> {
    const public_id: string = (await this.findOne(id)).public_id;
    await this.cloudinaryService.deleteFile(public_id);
    await this.ceprobisProduct.findByIdAndDelete(id).exec();
    return 'The product to been deleted successfully';
  }
}
