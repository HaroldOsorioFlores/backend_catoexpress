import { PartialType } from '@nestjs/mapped-types';
import { CreateElcholoUcsmDto } from './create-elcholo-ucsm.dto';

export class UpdateElcholoUcsmDto extends PartialType(CreateElcholoUcsmDto) {}
