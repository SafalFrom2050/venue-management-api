import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVenueDto } from './dto';

@Injectable()
export class VenueService {
  constructor(private prisma: PrismaService) {}

  async getVenues() {
    try {
      const venues = await this.prisma.venue.findMany({});
      return venues;
    } catch (e) {
      throw e;
    }
  }

  async createVenue(dto: CreateVenueDto) {
    try {
      const newVenue = await this.prisma.venue.create({
        data: {
          name: dto.name,
          description: dto.description,
          imageUrl: dto.imageUrl,
        },
      });

      return {
        status: true,
        venue: newVenue,
      };
    } catch (e) {
      throw e;
    }
  }

  editVenue(id: number) {
    return 'Still developing...';
  }

  deleteVenue(id: number) {
    return 'Still developing...';
  }
}
