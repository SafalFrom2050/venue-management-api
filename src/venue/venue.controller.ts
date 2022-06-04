import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto';
import { JwtGuard } from '../auth/guard';
import { UpdateFeedbackDto } from '../feedback/dto/updateFeedback.dto';
import { UpdateVenueDto } from './dto/updateVenue.dto';

@UseGuards(JwtGuard)
@Controller('venues')
export class VenueController {
  constructor(private venueService: VenueService) {}

  @Post('create')
  createVenue(@Body() dto: CreateVenueDto) {
    return this.venueService.createVenue(dto);
  }

  @Get()
  getVenues() {
    return this.venueService.getVenues();
  }

  @Get(':id')
  getVenue() {
    return this.venueService.getVenues();
  }

  @Patch('id')
  editVenue(@Param('id') id: string, dto: UpdateVenueDto) {
    return this.venueService.editVenue(+id, dto);
  }

  @Delete('id')
  deleteVenue(@Param('id') id: string) {
    return this.venueService.deleteVenue(+id);
  }
}
