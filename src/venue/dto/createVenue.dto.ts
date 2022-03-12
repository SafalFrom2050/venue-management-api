import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;

  @IsOptional()
  imageUrl: string;
}
