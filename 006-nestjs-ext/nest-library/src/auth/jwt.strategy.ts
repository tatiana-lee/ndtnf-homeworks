import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { key } from './config';

// console.log(key.secret)
// console.log(process.env.JWT_TOKEN)

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_TOKEN,
    });
  }

  public async validate(payload: any) {
    const user = await this.authService.validateUser(payload._id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
