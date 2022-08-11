import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateParticipationDto } from './dto/createParticipation.dto';
import { UpdateParticipationDto } from './dto/updateParticipation.dto';

@Injectable()
export class ParticipationService {
  constructor(private prisma: PrismaService) {}

  async createParticipation(dto: CreateParticipationDto) {
    try {
      const newParticipation = await this.prisma.participation.create({
        data: {
          userId: dto.userId,
          dateTime: new Date(dto.dateTime),
          event: dto.event,
        },
      });

      return {
        status: true,
        participation: newParticipation,
      };
    } catch (e) {
      throw e;
    }
  }

  async getParticipations() {
    try {
      const participations = await this.prisma.participation.findMany({});
      return participations;
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, dto: UpdateParticipationDto) {
    try {
      const updatedParticipation = await this.prisma.participation.update({
        where: {
          id: id,
        },
        data: {
          userId: dto.userId,
          dateTime: new Date(dto.dateTime),
          event: dto.event,
        },
      });

      return {
        status: true,
        venue: updatedParticipation,
      };
    } catch (e) {
      throw e;
    }
  }

  async remove(id: number) {
    try {
      const participation = await this.prisma.participation.delete({
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
