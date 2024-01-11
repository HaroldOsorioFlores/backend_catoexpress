import { PartialType } from '@nestjs/mapped-types';

import { CreatePanificadoraUcsmDto } from './create-panificadora-ucsm.dto';

export class UpdatePanificadoraUcsmDto extends PartialType(
  CreatePanificadoraUcsmDto,
) {}
