import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/user-register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    const user = await this.authService.create(createUserDto);
    return res.status(HttpStatus.OK).json({
      message: 'recibido',
      user: user,
    });
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<string> {
    return this.authService.login(loginDto);
  }
}