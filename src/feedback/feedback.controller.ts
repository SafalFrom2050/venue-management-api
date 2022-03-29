import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { FeedbackService } from './feedback.service';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('feedbacks')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post('create')
  createFeedback(@Body() dto: CreateFeedbackDto) {
    return this.feedbackService.createFeedback(dto);
  }

  @Get()
  getFeedbacks() {
    return this.feedbackService.getFeedbacks();
  }
}
