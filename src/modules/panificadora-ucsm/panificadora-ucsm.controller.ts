import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

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
  async create(
    @Body() createPanificadoraUcsmDto: CreatePanificadoraUcsmDto,
  ): Promise<string> {
    return await this.panificadoraUcsmService.create(createPanificadoraUcsmDto);
  }

  @Get()
  async findAll(): Promise<PanificadoraProduct[]> {
    return await this.panificadoraUcsmService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PanificadoraProduct> {
    return await this.panificadoraUcsmService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePanificadoraUcsmDto: UpdatePanificadoraUcsmDto,
  ): Promise<string> {
    return await this.panificadoraUcsmService.update(
      id,
      updatePanificadoraUcsmDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return await this.panificadoraUcsmService.remove(id);
  }
}
