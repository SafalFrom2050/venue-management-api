import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto';
import { JwtGuard } from '../auth/guard';

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
  editVenue(id: number) {
    return this.venueService.editVenue(id);
  }

  @Delete('id')
  deleteVenue(id: number) {
    return this.venueService.deleteVenue(id);
  }
}
