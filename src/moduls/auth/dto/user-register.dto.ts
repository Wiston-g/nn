import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  nickName: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(2, 100)
  email: string;

  @IsNotEmpty()
  cellphone: number;

  @IsNotEmpty()
  @IsString()
  password: string;
}
