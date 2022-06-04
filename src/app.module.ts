import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtGuard } from './auth/guards/jwt.guard';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ProfessorsModule } from './professors/professors.module';
import { RoomsModule } from './rooms/rooms.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProfessorsModule,
    RoomsModule,
    NewsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
