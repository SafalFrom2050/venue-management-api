import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  details: string;

  @IsNotEmpty()
  imagePath: string;

  @IsNotEmpty()
  photographer: string;

  @IsNotEmpty()
  price: string;
}
