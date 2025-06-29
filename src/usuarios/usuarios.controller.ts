import { Body, Controller, Post } from '@nestjs/common';
import { CrearUsuarioDto } from './dto/crearUsuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private servicioUsuario: UsuariosService) {}

    @Post()
    crearUsuario(@Body() usuario: CrearUsuarioDto){
        return this.servicioUsuario.crearUsuario(usuario);
    }
}
