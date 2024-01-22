import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

import { CreatePanificadoraUcsmDto } from './dto/create-panificadora-ucsm.dto';
import { UpdatePanificadoraUcsmDto } from './dto/update-panificadora-ucsm.dto';
import { PanificadoraProduct } from './entities/panificadora-ucsm.entity';
import { CloudinaryResponse } from '../cloudinary/cloudinary-response';
import { ImageProduct } from 'src/shared/models/image.model';

@Injectable()
export class PanificadoraUcsmService {
  constructor(
    @InjectModel(PanificadoraProduct.name)
    private readonly panificadoraProduct: Model<PanificadoraProduct>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(
    createPanificadoraUcsmDto: CreatePanificadoraUcsmDto,
    file: Express.Multer.File,
  ): Promise<string> {
    const image: CloudinaryResponse =
      await this.cloudinaryService.uploadFile(file);
    const product = new this.panificadoraProduct({
      ...createPanificadoraUcsmDto,
      urlImage: image.secure_url,
      public_id: image.public_id,
    });
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
    file: Express.Multer.File,
  ): Promise<string> {
    const product: PanificadoraProduct = await this.findOne(id);
    const image: ImageProduct = await this.cloudinaryService.updateFile(
      product,
      file,
    );
    await this.panificadoraProduct.findByIdAndUpdate(id, {
      ...updatePanificadoraUcsmDto,
      updatedAt: new Date(),
      image,
    });

    return `Product updated successfully`;
  }

  async remove(id: string): Promise<string> {
    const public_id: string = (await this.findOne(id)).public_id;
    await this.cloudinaryService.deleteFile(public_id);
    await this.panificadoraProduct.findByIdAndDelete(id);
    return `Product removed successfully`;
  }
}
