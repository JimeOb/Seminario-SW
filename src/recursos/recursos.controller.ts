import { Body, Controller, Post } from '@nestjs/common';
import { RecursosService } from './recursos.service';
import { CrearRecursoDto } from './dto/crearRecurso.dto';

@Controller('recursos')
export class RecursosController {
    constructor(private servicioRecurso: RecursosService){}

    @Post()
    crearRecurso(@Body() recurso: CrearRecursoDto) {
        return this.servicioRecurso.crearRecurso(recurso);
    }
}
