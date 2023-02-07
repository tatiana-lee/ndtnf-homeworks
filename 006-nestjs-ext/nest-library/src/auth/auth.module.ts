import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_TOKEN,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
