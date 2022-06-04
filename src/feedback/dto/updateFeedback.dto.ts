import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedbackDto } from './createFeedback.dto';

export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {}
