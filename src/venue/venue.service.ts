import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVenueDto } from './dto';
import { UpdateVenueDto } from './dto/updateVenue.dto';

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

  async editVenue(id: number, dto: UpdateVenueDto) {
    try {
      const updatedVenue = await this.prisma.venue.update({
        where: {
          id,
        },
        data: {
          name: dto.name,
          description: dto.description,
          imageUrl: dto.imageUrl,
        },
      });

      return {
        status: true,
        venue: updatedVenue,
      };
    } catch (e) {
      throw e;
    }
  }

  async deleteVenue(id: number) {
    try {
      const deletedVenue = await this.prisma.venue.delete({
        where: {
          id,
        },
      });

      return {
        status: true,
      };
    } catch (e) {
      throw e;
    }
  }
}
