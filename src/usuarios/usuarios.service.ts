import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';
import { Repository } from 'typeorm';
import { CrearUsuarioDto } from './dto/crearUsuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario) private usuarioRepositorio: Repository<Usuario>,
    ) {}

    async crearUsuario(dto: CrearUsuarioDto): Promise<Usuario> {
        // Evita duplicados
        const exists = await this.usuarioRepositorio.findOne({
          where: { identificacionUsuario: dto.identificacionUsuario },
        });
        if (exists) {
          throw new ConflictException('El ID de usuario ya existe');
        }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const hashed = await bcrypt.hash(dto.contraseña, 10);

        const usuarioNuevo = this.usuarioRepositorio.create({
          ...dto,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          contraseña: hashed,
        });
        return this.usuarioRepositorio.save(usuarioNuevo);
      }


      async findOneByUsername(nombre: string): Promise<Usuario | null> {
        return this.usuarioRepositorio.findOne({
          where: { nombre },
        });
      }

      async findOneByIdentificacion(id: number): Promise<Usuario | null> {
        return this.usuarioRepositorio.findOneBy({ identificacionUsuario: id });
      }

}
