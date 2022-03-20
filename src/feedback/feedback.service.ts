import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { PrismaService } from '../prisma/prisma.service';

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
}
