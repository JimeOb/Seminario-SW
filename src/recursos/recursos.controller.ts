import { Controller } from '@nestjs/common';
import { RecursosService } from './recursos.service';

@Controller('recursos')
export class RecursosController {
    constructor(private servicioRecurso: RecursosService){}
}
