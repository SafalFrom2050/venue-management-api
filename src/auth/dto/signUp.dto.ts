import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignUpDto {
  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
