import { Controller } from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')
export class ReservasController {
    constructor(private servicioReserva: ReservasService) {}
}
