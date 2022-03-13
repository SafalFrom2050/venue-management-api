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
      // return await this.prisma.event.findOne(id);
    } catch (e) {
      throw e;
    }
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
