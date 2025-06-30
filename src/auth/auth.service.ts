import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { Usuario } from 'src/usuarios/usuarios.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsuariosService) {}

  async validateUser(dto: LoginDto): Promise<Omit<Usuario, 'contraseña'>> {
    const { identificacionUsuario, password } = dto;
    // 1) Buscamos el usuario
    const user = await this.usersService.findOneByIdentificacion(identificacionUsuario);
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    // 2) Obtenemos el valor guardado
    const stored = user.contraseña;
    if (!stored) throw new UnauthorizedException('Usuario sin contraseña establecida');

    // DEBUG: ver qué estamos comparando
    console.log(`AuthService.validateUser → comparing [${password}] vs stored [${stored}]`);

    // 3) Comparamos
    let isMatch = false;
    if (stored.startsWith('$2')) {
      // bcrypt hash
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      isMatch = await bcrypt.compare(password, stored);
    } else {
      // texto plano
      isMatch = stored === password;
    }

    if (!isMatch) {
      throw new UnauthorizedException('Contraseña inválida');
    }

    // 4) Eliminamos el campo contraseña para no devolverlo
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { contraseña, ...userSafe } = user;
    return userSafe;
  }
}
