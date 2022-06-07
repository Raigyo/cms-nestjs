import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ReadUserDto } from 'src/users/dto/read-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      // returns the result without the password property
      return result;
    }
    return null;
  }
  async login(readUserDto: ReadUserDto) {
    const foundUser = await this.usersService.findOne(readUserDto.email);
    if (!foundUser) {
      throw new NotFoundException();
    }
    if (foundUser.password !== readUserDto.password) {
      throw new NotFoundException();
    }
    const payload = {
      createdAt: new Date().toISOString(),
      sub: foundUser._id,
      role: 'user',
    };
    if (foundUser.email === 'test@test.com') {
      payload.role = 'admin';
    } else {
      payload.role = 'user';
    }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
