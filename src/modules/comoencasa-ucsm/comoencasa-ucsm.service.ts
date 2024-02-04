import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ComoencasaProduct } from './entities/comoencasa-ucsm.entity';
import { CreateComoencasaUcsmDto } from './dto/create-comoencasa-ucsm.dto';
import { UpdateComoencasaUcsmDto } from './dto/update-comoencasa-ucsm.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CloudinaryResponse } from '../cloudinary/cloudinary-response';
import { ImageProduct } from 'src/utils/models/image.model';

@Injectable()
export class ComoencasaUcsmService {
  constructor(
    @InjectModel(ComoencasaProduct.name)
    private readonly comoencasaProduct: Model<ComoencasaProduct>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async create(
    createComoencasaUcsmDto: CreateComoencasaUcsmDto,
    file: Express.Multer.File,
  ): Promise<string> {
    const image: CloudinaryResponse =
      await this.cloudinaryService.uploadFile(file);
    const product = new this.comoencasaProduct({
      ...createComoencasaUcsmDto,
      urlImage: image.secure_url,
      public_id: image.public_id,
    });
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
      throw new NotFoundException('Not found product');
    }
    return searchProduct;
  }

  async update(
    id: string,
    updateComoencasaUcsmDto: UpdateComoencasaUcsmDto,
    file: Express.Multer.File,
  ): Promise<string> {
    const product: ComoencasaProduct = await this.findOne(id);
    const image: ImageProduct = await this.cloudinaryService.updateFile(
      product,
      file,
    );

    await this.comoencasaProduct.findByIdAndUpdate(
      id,
      {
        ...updateComoencasaUcsmDto,
        ...image,
        updatedAt: new Date(),
      },
      { new: true },
    );
    return 'Product update successfully';
  }

  async remove(id: string): Promise<string> {
    const public_id: string = (await this.findOne(id)).public_id;
    await this.cloudinaryService.deleteFile(public_id);
    await this.comoencasaProduct.findByIdAndDelete(id);
    return `Product deleted successfully`;
  }
}
