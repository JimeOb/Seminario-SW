import { Controller } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';

@Controller('prestamos')
export class PrestamosController {
    constructor(private servicioPrestamo: PrestamosService) {}
}
