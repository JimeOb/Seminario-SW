import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CrearReservaDto } from './dto/crearReserva.dto';

@Controller('reservas')
export class ReservasController {
    constructor(private servicioReserva: ReservasService) {}

    @Post()
    crearReserva(@Body() dto: CrearReservaDto) {
        return this.servicioReserva.crearReserva(dto);
    }

    @Get('/usuario/:idUsuario')
    obtenerReservasPorsuario(@Param('idUsuario') idUsuario: number) {
        return this.servicioReserva.obtenerReservasPorsuario(idUsuario);
    }

}
