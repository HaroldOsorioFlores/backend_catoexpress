import { PartialType } from '@nestjs/mapped-types';
import { CreateComoencasaUcsmDto } from './create-comoencasa-ucsm.dto';

export class UpdateComoencasaUcsmDto extends PartialType(
  CreateComoencasaUcsmDto,
) {}
