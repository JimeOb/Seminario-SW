import { Controller } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';

@Controller('solicitudes')
export class SolicitudesController {
    constructor(private servicioSolicitud: SolicitudesService) {}
}
