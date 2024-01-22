import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CeprobisUcsmService } from './ceprobis-ucsm.service';
import { CreateCeprobisUcsmDto } from './dto/create-ceprobis-ucsm.dto';
import { UpdateCeprobisUcsmDto } from './dto/update-ceprobis-ucsm.dto';
import { CeprobisProduct } from './entities/ceprobis-ucsm.entity';

@Controller('products/ceprobis-ucsm')
export class CeprobisUcsmController {
  constructor(private readonly ceprobisUcsmService: CeprobisUcsmService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createCeprobisUcsmDto: CreateCeprobisUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.ceprobisUcsmService.create(createCeprobisUcsmDto, file);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get()
  async findAll(): Promise<CeprobisProduct[]> {
    try {
      return await this.ceprobisUcsmService.findAll();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CeprobisProduct> {
    try {
      return await this.ceprobisUcsmService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @Body() updateCeprobisUcsmDto: UpdateCeprobisUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.ceprobisUcsmService.update(
        id,
        updateCeprobisUcsmDto,
        file,
      );
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.ceprobisUcsmService.remove(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
