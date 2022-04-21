import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    @Length(2, 100)
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;
}