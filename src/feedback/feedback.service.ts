import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateFeedbackDto } from './dto/updateFeedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async createFeedback(dto: CreateFeedbackDto) {
    try {
      const newFeedback = await this.prisma.feedback.create({
        data: {
          username: dto.username,
          email: dto.email,
          feedback: dto.feedback,
        },
      });

      return {
        status: true,
        feedback: newFeedback,
      };
    } catch (e) {
      throw e;
    }
  }

  async getFeedbacks() {
    try {
      const feedbacks = await this.prisma.feedback.findMany({});
      return feedbacks;
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, dto: UpdateFeedbackDto) {
    try {
      const feedback = await this.prisma.feedback.update({
        where: {
          id,
        },
        data: {
          username: dto.username,
          email: dto.email,
          feedback: dto.feedback,
        },
      });
      return {
        status: true,
        feedback,
      };
    } catch (e) {
      throw e;
    }
  }

  async delete(id: number) {
    try {
      const feedback = await this.prisma.feedback.delete({
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
