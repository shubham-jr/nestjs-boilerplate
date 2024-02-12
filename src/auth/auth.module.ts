import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import jwtConfig from './configuration';
import { JwtAuthGuard } from './guards/jwt/jwt.guard';
import { RoleGuard } from './guards/role/role.guard';

@Module({
  imports: [JwtModule.registerAsync(jwtConfig.asProvider())],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AuthModule {}
