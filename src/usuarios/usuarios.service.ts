import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';
import { Repository } from 'typeorm';
import { CrearUsuarioDto } from './dto/crearUsuario.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario) private usuarioRepositorio: Repository<Usuario>,
    ) {}

    async crearUsuario(usuario: CrearUsuarioDto): Promise<Usuario> {
        const usuarioNuevo = this.usuarioRepositorio.create(usuario);
        return this.usuarioRepositorio.save(usuarioNuevo);
    }
}
