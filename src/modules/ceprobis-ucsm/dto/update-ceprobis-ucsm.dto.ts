import { PartialType } from '@nestjs/mapped-types';
import { CreateCeprobisUcsmDto } from './create-ceprobis-ucsm.dto';

export class UpdateCeprobisUcsmDto extends PartialType(CreateCeprobisUcsmDto) {}
