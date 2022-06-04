import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEventDto) {
    try {
      const newEvent = await this.prisma.event.create({
        data: {
          title: dto.title,
          details: dto.details,
          imagePath: dto.imagePath,
          photographer: dto.photographer,
          price: dto.price,
        },
      });

      return {
        status: true,
        event: newEvent,
      };
    } catch (e) {
      throw e;
    }
  }

  async findAll() {
    try {
      return await this.prisma.event.findMany({});
    } catch (e) {
      throw e;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.event.findFirst({ where: { id: id } });
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    try {
      const updatedVenue = await this.prisma.event.update({
        where: {
          id: id,
        },
        data: {
          title: updateEventDto.title,
          details: updateEventDto.details,
          imagePath: updateEventDto.imagePath,
          photographer: updateEventDto.photographer,
          price: updateEventDto.price,
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

  async remove(id: number) {
    try {
      const venue = await this.prisma.event.delete({
        where: {
          id: id,
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
