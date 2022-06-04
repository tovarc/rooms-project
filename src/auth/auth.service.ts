import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<IUser> {
    const user = await this.usersService.findByEmail(email);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: IUser) {
    const payload = { email: user.email, sub: user.id, role: user.role.role };

    return {
      role: user.role.role,
      access_token: this.jwtService.sign(payload),
    };
  }

  async profile(user: IUser): Promise<IUser> {
    const profile = await this.usersService.findByEmail(user.email);
    return profile;
  }
}
