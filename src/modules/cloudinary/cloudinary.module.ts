import { Module } from '@nestjs/common';

import { CloudinaryService } from './cloudinary.service';
import { CLoudinaryProvider } from './cloudinary.provider';

@Module({
  providers: [CloudinaryService, CLoudinaryProvider],
  exports: [CloudinaryService, CLoudinaryProvider],
})
export class CloudinaryModule {}
