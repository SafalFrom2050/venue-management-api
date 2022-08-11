import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ParticipationService } from './participation.service';
import { CreateParticipationDto } from './dto/createParticipation.dto';
import { JwtGuard } from '../auth/guard';
import { UpdateParticipationDto } from './dto/updateParticipation.dto';

@UseGuards(JwtGuard)
@Controller('participations')
export class ParticipationController {
  constructor(private participationService: ParticipationService) {}

  @Post('create')
  createFeedback(@Body() dto: CreateParticipationDto) {
    return this.participationService.createParticipation(dto);
  }

  @Get()
  getFeedbacks() {
    return this.participationService.getParticipations();
  }

  @Patch(':id')
  update(@Param('id') id: string, dto: UpdateParticipationDto) {
    return this.participationService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.participationService.remove(+id);
  }
}
