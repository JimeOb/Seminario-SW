import { Body, Controller, Post } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { CrearHorarioDTO } from './dto/crearHorario.dto';

@Controller('horarios')
export class HorariosController {
    constructor(private horarioServicio: HorariosService) {}

    @Post()
    crearHorario(@Body() horario: CrearHorarioDTO) {
        return this.horarioServicio.crearHorario(horario);
    }
}
