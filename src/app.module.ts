import { Module } from '@nestjs/common';
import { VenueModule } from './venue/venue.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [VenueModule, AuthModule, PrismaModule],
})
export class AppModule {}
