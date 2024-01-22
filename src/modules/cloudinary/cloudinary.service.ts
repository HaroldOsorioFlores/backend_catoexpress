import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
const streamifier = require('streamifier');

import { CloudinaryResponse } from './cloudinary-response';
import { Product } from 'src/shared/common/base-product.entity';
import { ImageProduct } from 'src/shared/models/image.model';

@Injectable()
export class CloudinaryService {
  async uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return await new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'catoexpress' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async deleteFile(public_id: string): Promise<CloudinaryResponse> {
    const deleteImage = await cloudinary.uploader.destroy(public_id);
    return deleteImage;
  }

  async updateFile(
    product: Product,
    file: Express.Multer.File,
  ): Promise<ImageProduct> {
    if (file) {
      await this.deleteFile(product.public_id);
      const image: CloudinaryResponse = await this.uploadFile(file);
      return { urlImage: image.secure_url, public_id: image.public_id };
    }
    return { urlImage: product.urlImage, public_id: product.public_id };
  }
}
