import { Controller } from '@nestjs/common';
import { ValoracionesService } from './valoraciones.service';

@Controller('valoraciones')
export class ValoracionesController {
    constructor(private servicioValoracion: ValoracionesService) {}
}
