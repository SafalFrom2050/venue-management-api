import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { VenueModule } from './venue/venue.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    VenueModule,
    AuthModule,
    PrismaModule,
    EventModule,
  ],
})
export class AppModule {}
