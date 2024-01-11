import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CeprobisUcsmService } from './ceprobis-ucsm.service';
import { CreateCeprobisUcsmDto } from './dto/create-ceprobis-ucsm.dto';
import { UpdateCeprobisUcsmDto } from './dto/update-ceprobis-ucsm.dto';
import { CeprobisProduct } from './entities/ceprobis-ucsm.entity';

@Controller('products/ceprobis-ucsm')
export class CeprobisUcsmController {
  constructor(private readonly ceprobisUcsmService: CeprobisUcsmService) {}

  @Post()
  async create(
    @Body() createCeprobisUcsmDto: CreateCeprobisUcsmDto,
  ): Promise<string> {
    return await this.ceprobisUcsmService.create(createCeprobisUcsmDto);
  }

  @Get()
  async findAll(): Promise<CeprobisProduct[]> {
    return await this.ceprobisUcsmService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CeprobisProduct> {
    return await this.ceprobisUcsmService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCeprobisUcsmDto: UpdateCeprobisUcsmDto,
  ): Promise<string> {
    return await this.ceprobisUcsmService.update(id, updateCeprobisUcsmDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return await this.ceprobisUcsmService.remove(id);
  }
}
