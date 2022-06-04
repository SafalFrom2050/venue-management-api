import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { FeedbackService } from './feedback.service';
import { JwtGuard } from '../auth/guard';
import { UpdateFeedbackDto } from './dto/updateFeedback.dto';

@UseGuards(JwtGuard)
@Controller('feedbacks')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post('create')
  createFeedback(@Body() dto: CreateFeedbackDto) {
    return this.feedbackService.createFeedback(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, dto: UpdateFeedbackDto) {
    return this.feedbackService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.feedbackService.delete(+id);
  }

  @Get()
  getFeedbacks() {
    return this.feedbackService.getFeedbacks();
  }
}
