import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CrearReservaDTO } from './dto/crearReserva.dto';

@Controller('reservas')
export class ReservasController {
    constructor(private servicioReserva: ReservasService) {}

    @Post()
    crearReserva(@Body() reserva: CrearReservaDTO) {
        return this.servicioReserva.crearReserva(reserva);
    }

    @Get('/usuario/:idUsuario')
    obtenerReservasPorsuario(@Param('idUsuario') idUsuario: number) {
        return this.servicioReserva.obtenerReservasPorsuario(idUsuario);
    }

}
