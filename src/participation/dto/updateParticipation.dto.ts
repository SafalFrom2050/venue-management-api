import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipationDto } from './createParticipation.dto';

export class UpdateParticipationDto extends PartialType(
  CreateParticipationDto,
) {}
