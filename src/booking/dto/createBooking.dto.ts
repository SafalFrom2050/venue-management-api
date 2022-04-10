import {
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsDateString()
  @IsOptional()
  dateTime: Date;

  @IsString()
  @IsOptional()
  event: string;
}
