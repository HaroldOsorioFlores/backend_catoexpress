import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComoencasaUcsmService } from './comoencasa-ucsm.service';
import { CreateComoencasaUcsmDto } from './dto/create-comoencasa-ucsm.dto';
import { UpdateComoencasaUcsmDto } from './dto/update-comoencasa-ucsm.dto';
import { ComoencasaProduct } from './entities/comoencasa-ucsm.entity';

@Controller('products/comoencasa-ucsm')
export class ComoencasaUcsmController {
  constructor(private readonly comoencasaUcsmService: ComoencasaUcsmService) {}

  @Post()
  async create(
    @Body() createComoencasaUcsmDto: CreateComoencasaUcsmDto,
  ): Promise<string> {
    return await this.comoencasaUcsmService.create(createComoencasaUcsmDto);
  }

  @Get()
  async findAll(): Promise<ComoencasaProduct[]> {
    return await this.comoencasaUcsmService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ComoencasaProduct> {
    return await this.comoencasaUcsmService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateComoencasaUcsmDto: UpdateComoencasaUcsmDto,
  ): Promise<string> {
    return await this.comoencasaUcsmService.update(id, updateComoencasaUcsmDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return await this.comoencasaUcsmService.remove(id);
  }
}
