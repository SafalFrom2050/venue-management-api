import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsDate()
  @IsOptional()
  dateTime: Date;

  @IsString()
  @IsOptional()
  event: String;
}
