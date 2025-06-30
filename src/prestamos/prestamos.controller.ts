import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CrearPrestamoDTO } from './dto/crearPrestamo.dto';
import { RegistrarDevolucionDTO } from './dto/registrarDevolucion.dto';

@Controller('prestamos')
export class PrestamosController {
    constructor(private servicioPrestamo: PrestamosService) {}

    @Post()
    crearPrestamo(@Body() prestamo: CrearPrestamoDTO) {
        return this.servicioPrestamo.crearPrestamo(prestamo)
    }

    @Patch(':pk')
    registrarDevolucion(@Body() prestamo: RegistrarDevolucionDTO, @Param('pk') pk: number) {
        return this.servicioPrestamo.registrarDevolucion(pk, prestamo);
    }
}
