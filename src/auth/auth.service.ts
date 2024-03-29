import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto';

import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignUpDto) {
    const hashedPassword = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          phone: '',
          firstName: dto.firstName,
          lastName: dto.lastName,
          addressId: dto.addressId,
        },
      });
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email has been taken!');
        }
        throw error;
      }
      console.log(error);
    }
  }

  async signin(dto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('User not found!');
    }

    const isPasswordCorrect = await argon.verify(user.password, dto.password);

    if (!isPasswordCorrect) {
      throw new ForbiddenException('Password do not match!');
    }

    return this.signToken(user.id, user.email);
  }

  async signToken(userId: number, email: string): Promise<{ access_token }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: this.config.get('JWT_EXPIRATION'),
      secret: this.config.get('JWT_SECRET'),
    });

    return {
      access_token: token,
    };
  }
}
