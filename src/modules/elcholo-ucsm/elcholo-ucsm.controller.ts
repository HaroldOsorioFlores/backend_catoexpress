import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ElcholoUcsmService } from './elcholo-ucsm.service';
import { CreateElcholoUcsmDto } from './dto/create-elcholo-ucsm.dto';
import { UpdateElcholoUcsmDto } from './dto/update-elcholo-ucsm.dto';
import { ElcholoProduct } from './entities/elcholo-ucsm.entity';

@Controller('products/elcholo-ucsm')
export class ElcholoUcsmController {
  constructor(private readonly elcholoUcsmService: ElcholoUcsmService) {}

  @Post()
  async create(
    @Body() createElcholoUcsmDto: CreateElcholoUcsmDto,
  ): Promise<string> {
    return await this.elcholoUcsmService.create(createElcholoUcsmDto);
  }

  @Get()
  async findAll(): Promise<ElcholoProduct[]> {
    return await this.elcholoUcsmService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ElcholoProduct> {
    return await this.elcholoUcsmService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateElcholoUcsmDto: UpdateElcholoUcsmDto,
  ): Promise<string> {
    return await this.elcholoUcsmService.update(id, updateElcholoUcsmDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return await this.elcholoUcsmService.remove(id);
  }
}
