import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateElcholoUcsmDto } from './dto/create-elcholo-ucsm.dto';
import { UpdateElcholoUcsmDto } from './dto/update-elcholo-ucsm.dto';
import { ElcholoProduct } from './entities/elcholo-ucsm.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CloudinaryResponse } from '../cloudinary/cloudinary-response';
import { ImageProduct } from 'src/shared/models/image.model';

@Injectable()
export class ElcholoUcsmService {
  constructor(
    @InjectModel(ElcholoProduct.name)
    private readonly elCholoProduct: Model<ElcholoProduct>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(
    createElcholoUcsmDto: CreateElcholoUcsmDto,
    file: Express.Multer.File,
  ): Promise<string> {
    const image: CloudinaryResponse =
      await this.cloudinaryService.uploadFile(file);
    const product = new this.elCholoProduct({
      ...createElcholoUcsmDto,
      urlImage: image.secure_url,
      public_id: image.public_id,
    });

    product.save();
    return 'Product created successfully';
  }

  async findAll(): Promise<ElcholoProduct[]> {
    return await this.elCholoProduct.find().sort({ _id: -1 }).exec();
  }

  async findOne(id: string): Promise<ElcholoProduct> {
    const productSearch: ElcholoProduct =
      await this.elCholoProduct.findById(id);
    if (!productSearch) {
      throw new NotFoundException('Product not found');
    }
    return productSearch;
  }

  async update(
    id: string,
    updateElcholoUcsmDto: UpdateElcholoUcsmDto,
    file: Express.Multer.File,
  ): Promise<string> {
    const product: ElcholoProduct = await this.findOne(id);
    const image: ImageProduct = await this.cloudinaryService.updateFile(
      product,
      file,
    );

    await this.elCholoProduct.findByIdAndUpdate(id, {
      ...updateElcholoUcsmDto,
      updatedAt: new Date(),
      image,
    });

    return 'Product update successfully';
  }

  async remove(id: string): Promise<string> {
    const public_id: string = (await this.findOne(id)).public_id;
    await this.cloudinaryService.deleteFile(public_id);
    await this.elCholoProduct.findByIdAndDelete(id);
    return `Product remove successfully`;
  }
}
