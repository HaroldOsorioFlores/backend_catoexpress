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

import { PanificadoraUcsmService } from './panificadora-ucsm.service';
import { CreatePanificadoraUcsmDto } from './dto/create-panificadora-ucsm.dto';
import { UpdatePanificadoraUcsmDto } from './dto/update-panificadora-ucsm.dto';
import { PanificadoraProduct } from './entities/panificadora-ucsm.entity';

@Controller('products/panificadora-ucsm')
export class PanificadoraUcsmController {
  constructor(
    private readonly panificadoraUcsmService: PanificadoraUcsmService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createPanificadoraUcsmDto: CreatePanificadoraUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.panificadoraUcsmService.create(
        createPanificadoraUcsmDto,
        file,
      );
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get()
  async findAll(): Promise<PanificadoraProduct[]> {
    try {
      return await this.panificadoraUcsmService.findAll();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PanificadoraProduct> {
    try {
      return await this.panificadoraUcsmService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @Body() updatePanificadoraUcsmDto: UpdatePanificadoraUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.panificadoraUcsmService.update(
        id,
        updatePanificadoraUcsmDto,
        file,
      );
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.panificadoraUcsmService.remove(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
