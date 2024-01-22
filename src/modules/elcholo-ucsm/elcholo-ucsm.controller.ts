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

import { ElcholoUcsmService } from './elcholo-ucsm.service';
import { CreateElcholoUcsmDto } from './dto/create-elcholo-ucsm.dto';
import { UpdateElcholoUcsmDto } from './dto/update-elcholo-ucsm.dto';
import { ElcholoProduct } from './entities/elcholo-ucsm.entity';

@Controller('products/elcholo-ucsm')
export class ElcholoUcsmController {
  constructor(private readonly elcholoUcsmService: ElcholoUcsmService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createElcholoUcsmDto: CreateElcholoUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.elcholoUcsmService.create(createElcholoUcsmDto, file);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get()
  async findAll(): Promise<ElcholoProduct[]> {
    try {
      return await this.elcholoUcsmService.findAll();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ElcholoProduct> {
    try {
      return await this.elcholoUcsmService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @Body() updateElcholoUcsmDto: UpdateElcholoUcsmDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.elcholoUcsmService.update(
        id,
        updateElcholoUcsmDto,
        file,
      );
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.elcholoUcsmService.remove(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
