import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ComoencasaUcsmService } from './comoencasa-ucsm.service';
import { CreateComoencasaUcsmDto } from './dto/create-comoencasa-ucsm.dto';
import { UpdateComoencasaUcsmDto } from './dto/update-comoencasa-ucsm.dto';
import { ComoencasaProduct } from './entities/comoencasa-ucsm.entity';

@Controller('products/comoencasa-ucsm')
export class ComoencasaUcsmController {
  constructor(private readonly comoencasaUcsmService: ComoencasaUcsmService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createComoencasaUcsmDto: CreateComoencasaUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.comoencasaUcsmService.create(
        createComoencasaUcsmDto,
        file,
      );
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get()
  async findAll(): Promise<ComoencasaProduct[]> {
    try {
      return await this.comoencasaUcsmService.findAll();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ComoencasaProduct> {
    try {
      return await this.comoencasaUcsmService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateComoencasaUcsmDto: UpdateComoencasaUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.comoencasaUcsmService.update(
        id,
        updateComoencasaUcsmDto,
        file,
      );
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.comoencasaUcsmService.remove(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
