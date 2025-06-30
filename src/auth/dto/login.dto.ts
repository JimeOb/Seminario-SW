/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString } from 'class-validator';

export class LoginDto {

  @IsNumber()
  identificacionUsuario: number;

  @IsString()
  password: string;
}
