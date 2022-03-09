import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { VenueService } from './venue.service';

@Controller('venues')
export class VenueController {
  constructor(private venueService: VenueService) {}

  @Post()
  createVenue() {
    return this.venueService.createVenue();
  }

  @Get()
  getVenues() {
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
