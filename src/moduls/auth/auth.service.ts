import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { CreateUserDto } from './dto/user-register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/user-login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {} 
  async create(createUserDto: CreateUserDto): Promise <any> {
    try {
      const salt = await bcrypt.genSalt();
      const hashPassword = bcrypt.hash(createUserDto.password, salt);

      const registerUser = {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        nickName: createUserDto.nickName,
        email: createUserDto.email,
        cellphone: createUserDto.cellphone,
        password: await hashPassword,
      };
    
      const user = this.usersRepository.save(registerUser);
      return user;
    } catch (e) {
      if(e.code === 'ER_DUP_ENTRY'){
          throw new ConflictException('El usuario no pudo ser registrado, debe cambiar el correo.');
        }else{
          throw new InternalServerErrorException();
      }
    }
  };

  async login(loginDto: LoginDto): Promise<string> {
    const email = loginDto.email;
    const searchEmail = await this.usersRepository.findOne({ email });
    
    if(searchEmail == undefined){
      console.log("no existe el usuario");
    }else{
      const checkPassword = await 
      console.log(searchEmail);
    }
    return 'ok';
  }  
}


